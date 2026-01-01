import { describe ,it,expect } from "vitest";
import { selectFilteredPlaces } from "./selectFilteredPlaces";

describe("selectFilteredPlaces", () => {
  it("retourne tout si category = all", () => {
    const places = [
      { name: "A", category: "Culture", rating: 4 },
      { name: "B", category: "Nature", rating: 5 },
    ];

    const filters = { category: "all", minRating: null };

    const result = selectFilteredPlaces(places, filters);
    expect(result.length).toBe(2);
  });

  it("filtre par catégorie", () => {
    const places = [
      { name: "A", category: "Culture", rating: 4 },
      { name: "B", category: "Nature", rating: 5 },
    ];

    const filters = { category: "Culture", minRating: null };

    const result = selectFilteredPlaces(places, filters);
    expect(result).toEqual([
      { name: "A", category: "Culture", rating: 4 },
    ]);
  });

  it("filtre par note minimale", () => {
    const places = [
      { name: "A", category: "Culture", rating: 3 },
      { name: "B", category: "Culture", rating: 5 },
    ];

    const filters = { category: "Culture", minRating: 4 };

    const result = selectFilteredPlaces(places, filters);
    expect(result.length).toBe(1);
    expect(result[0].rating).toBe(5);
  });
});
