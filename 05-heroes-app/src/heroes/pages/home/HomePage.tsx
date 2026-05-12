import { useSearchParams } from "react-router";
import { use, useMemo } from "react";

import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { HeroGrid } from "../../components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { FavoriteHeroContext } from "@/context/FavoriteHeroContext";

export const HomePage = () => {
  // Para establecer paginación desde la URL.
  // Ejmplo: ?page=2&offset=10
  const [searchParams, setSearchParams] = useSearchParams();

  const { favoriteCount, favorites } = use(FavoriteHeroContext);

  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  const activeTab = searchParams.get("tab") ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: HeroesResponse } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();

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
                  prev.set("category", "all");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              All Characters ({summary?.totalHeroes ?? 0})
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  prev.set("category", "favorites");
                  return prev;
                })
              }
            >
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "hero");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "villain");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Villains ({summary?.villainCount ?? 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={HeroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid heroes={favorites} />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid heroes={HeroesResponse?.heroes || []} />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid heroes={HeroesResponse?.heroes || []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {selectedTab !== "favorites" && (
          <CustomPagination totalPages={HeroesResponse?.pages ?? 1} />
        )}
      </>
    </>
  );
};
