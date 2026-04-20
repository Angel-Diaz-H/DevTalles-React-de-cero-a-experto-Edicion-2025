import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { HeroGrid } from "../../components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.action";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  useEffect(() => {
    getHeroesByPage().then((heroes) => {
      console.log(heroes);
    });
  }, []);

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
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={5} />
      </>
    </>
  );
};
