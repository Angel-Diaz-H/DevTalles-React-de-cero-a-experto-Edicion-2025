import { CustomHeader } from "./shared/components/CustomHeader";
import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handleSearch, previousTerms, handleTermClicked } = useGifs();

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
      <GifList gifs={gifs} />
    </>
  );
};
