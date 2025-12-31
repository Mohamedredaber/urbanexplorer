export const selectFilteredPlaces = (state) => {
  const places = Array.isArray(state.places.list)
    ? state.places.list
    : [];

  const { category, minRating } = state.filters;

  return places.filter((place) => {
    const categoryMatch =
      category === "all" || place.category === category;

    const ratingMatch =
      !minRating || place.rating >= minRating;

    return categoryMatch && ratingMatch;
  });
};

