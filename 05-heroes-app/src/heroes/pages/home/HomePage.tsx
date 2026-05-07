import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { useMemo } from "react";

import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { HeroGrid } from "../../components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const HomePage = () => {
  // Para establecer paginación desde la URL.
  // Ejmplo: ?page=2&offset=10
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const activeTab = searchParams.get("tab") ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  // console.log(searchParams.get("1"));
  // console.log(searchParams.get("offset"));

  // const [activeTab, setActiveTab] = useState<
  //   "all" | "favorites" | "heroes" | "villains"
  // >("all");

  const { data: HeroesResponse } = useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5 /* 5 minutos */,
  });

  // console.log({ HeroesResponse });

  // useEffect(() => {
  //   getHeroesByPage().then();
  // }, []);

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra tus superhéroes y villanos favoritos"
        />

        <CustomBreacrumbs currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  return prev;
                })
              }
            >
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  return prev;
                })
              }
            >
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  return prev;
                })
              }
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={HeroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={HeroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
