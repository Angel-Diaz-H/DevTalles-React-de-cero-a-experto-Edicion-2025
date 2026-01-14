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

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de GIFs"
        description="¡Descubre y comparte el GIF perfecto!"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras!" />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={["Gokú", "Dragon Ball Súper"]}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
