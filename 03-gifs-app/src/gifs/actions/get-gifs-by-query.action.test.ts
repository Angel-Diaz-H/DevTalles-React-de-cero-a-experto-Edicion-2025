import { describe, test, expect, beforeEach } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../../tests/mock/giphy.response.data";

describe("getGifsByQuery", () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    // mock.reset();
    mock = new AxiosMockAdapter(giphyApi);
  });

  // test("should return a list of gifs", async () => {
  //   const gifs = await getGifsByQuery("Goku");
  //   const [gif1] = gifs;

  //   // console.log(gifs);

  //   expect(gifs.length).toBe(10);

  //   expect(gif1).toEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //   });
  // });

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);
    const gifs = await getGifsByQuery("Goku");
    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
      expect(typeof gif.height).toBe("number");
    });
  });

  test("should return an empty list of gifs if query is empty", async () => {
    // mock.onGet("/search").reply(200, { data: [] });

    mock.restore();
    const gifs = await getGifsByQuery("");

    console.log(gifs);

    expect(gifs.length).toBe(0);
  });

  test("should handle error when the API returns an error", async () => {
    mock.onGet("/search").reply(400, {
      data: {
        message: "Bad request",
      },
    });

    const gifs = await getGifsByQuery("Goku");
    console.log(gifs);
    expect(gifs.length).toBe(0);
  });
});
