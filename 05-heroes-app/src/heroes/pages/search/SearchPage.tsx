import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";
import { HeroGrid } from "../../components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "@/heroes/actions/get-hero.action";

export const SearchPage = () => {
  const { data: superheroData, isError } = useQuery({
    queryKey: ["hero", idSlug],
    queryFn: () => getHeroAction(idSlug),
    retry: false,
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

      <HeroGrid heroes={[]} />
    </>
  );
};

export default SearchPage;
