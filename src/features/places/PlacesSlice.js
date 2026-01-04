// features/places/placesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loadPlaces, savePlaces } from './placesStorage';
const initialState = {
  places: loadPlaces(),
  filteredPlaces: loadPlaces(),
  filters: {
    city: 'all',
    category: 'all',
    minRating: 0,
    maxDistance: 50
  },
  loading: false,
  error: null
};
const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
      savePlaces(action.payload);
    },
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredPlaces = state.places;
    }
  }
});

export const { setPlaces, setFilter, resetFilters } = placesSlice.actions;
export default placesSlice.reducer;