import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";
import { HeroGrid } from "../../components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5 /* 5 minutos */,
  });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra tus superhéroes y villanos favoritos"
      />

      <CustomBreacrumbs
        currentPage="Buscador de héroes"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Home2", to: "/" },
          { label: "Home3", to: "/" },
        ]}
      />

      <HeroStats />

      <SearchControls />

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
