import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreacrumbs } from "@/components/custom/CustomBreacrumbs";

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
