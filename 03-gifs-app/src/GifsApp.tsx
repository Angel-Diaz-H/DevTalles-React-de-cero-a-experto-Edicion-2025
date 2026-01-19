import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { GifList } from "./gifs/GifList";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de GIFs"
        description="¡Descubre y comparte el GIF perfecto!"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras!" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
