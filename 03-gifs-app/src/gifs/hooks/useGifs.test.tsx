import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";

describe("useGifs", () => {
  test("Should return default values and methods", () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("Should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleSearch("Goku");
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("Should return a list of gifs when handleTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleTermClicked("Goku");
    });
    expect(result.current.gifs.length).toBe(10);
  });
});
