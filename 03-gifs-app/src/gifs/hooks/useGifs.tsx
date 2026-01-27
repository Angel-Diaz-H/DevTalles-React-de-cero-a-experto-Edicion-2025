import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousTerms, setPreviousTerms] = useState<string[]>([""]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 7));
    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return {
    // Props / Values.
    gifs,

    // Methods / Actions.
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};
