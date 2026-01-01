import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: "all",
  maxDistance: null,
  minRating: null,
  search: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setMaxDistance: (state, action) => {
      const value = action.payload;
      if (value === null) {
        state.maxDistance = null;
        return;
      }
      const distance = Number(value);
      if (!Number.isNaN(distance) && distance >= 0 && distance <= 100) {
        state.maxDistance = distance;
      }
    },
    setMinRating: (state, action) => {
      const value = action.payload;
      if (value === null) {
        state.minRating = null;
        return;
      }
      const rating = Number(value);
      if (!Number.isNaN(rating) && rating > 0 && rating <= 5) {
        state.minRating = rating;
      }
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilters: (state, action) => {
      Object.assign(state, action.payload);
    },

    resetFilter: () => initialState,
  },
});

export const {
  setCategory,
  setMaxDistance,
  setMinRating,
  setSearch,
  setFilters,
  resetFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
