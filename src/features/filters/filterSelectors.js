import { createSelector } from "@reduxjs/toolkit";
export const selectPlacesList = (state) => state.places.list;
export const selectFilters = (state) => state.filters;
export const selectFilteredPlaces = createSelector(
  [selectPlacesList, selectFilters],
  (places, filters) => {
    if (!places) return [];
    return places
      .filter((place) => {
        if (place.name === "Sans nom" || place.categories[1].title === "unknown") return false;
        const matchCategory =
          filters.category === "all" || place.categories[1].title.toLowerCase() === place.category.includes(filters.category.toLowerCase());
        const matchRating =
          !filters.minRating || place.rating >= filters.minRating;
        // const matchSearch =
        //   !filters.search ||
        //   place.name.toLowerCase().includes(filters.search.toLowerCase());
        return matchCategory && matchRating ;
      });
  }
);

const objreturn =[
  {
    "id": "Gfv-RuYTuLo-RNnqJnF3Gg",
    "name": "La Lola",
    "rating": 4.5,
    "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/PzOYkr1PrWm59LjzVWewPg/o.jpg",
    "coordinates": {
      "latitude": 35.7812,
      "longitude": -5.8123
    },
    "categories": [
      { "title": "Beach Bars" },
      { "title": "Restaurants" }
    ],
    "location": {
      "display_address": [
        "Playa de Zahara",
        "11393 Zahara de los Atunes",
        "Spain"
      ]
    }
  }
]
