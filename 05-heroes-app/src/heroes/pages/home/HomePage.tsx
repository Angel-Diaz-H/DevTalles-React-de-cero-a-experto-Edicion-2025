import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { HeroGrid } from "../../components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  const { data: HeroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5 /* 5 minutos */,
  });

  console.log({ HeroesResponse });

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
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
        <CustomPagination totalPages={5} />
      </>
    </>
  );
};
