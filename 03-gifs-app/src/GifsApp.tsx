import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from '../gifs/PreviousSearches';

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de GIFs" description="¡Descubre y comparte el GIF perfecto!" />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras!" />

            {/* Búsquedas previas */}
            <PreviousSearches />

            {/* Gifs */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>{gif.width}x{gif.height} (1.5mb)</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}