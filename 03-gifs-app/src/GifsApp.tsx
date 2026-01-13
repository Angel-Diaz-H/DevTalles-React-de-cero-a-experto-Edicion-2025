import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { GifList } from "./gifs/GifList";

export const GifsApp = () => {
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
      <PreviousSearches searches={["Gokú", "Dragon Ball Súper"]} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
