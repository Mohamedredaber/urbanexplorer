// features/places/placesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loadPlaces, savePlaces } from './placesStorage';
import { toggleLike, toggleFavorite } from './likesThunks';
import { applyFilters } from './filtersThunks';

const initialState = {
  places: loadPlaces(),
  filteredPlaces: loadPlaces(),
  filters: {
    city: 'all',
    search :"",
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
  },
  
  // ⭐⭐⭐ AJOUTER CES extraReducers ⭐⭐⭐
  extraReducers: (builder) => {
    builder
      // Loading state
      .addCase(toggleLike.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      
      // Success - Mettre à jour les places
      .addCase(toggleLike.fulfilled, (state, action) => {
        state.loading = false;
        state.places = action.payload;
        
        // Mettre à jour aussi filteredPlaces
        state.filteredPlaces = state.filteredPlaces.map(fp => {
          const updatedPlace = action.payload.find(p => p.id === fp.id);
          return updatedPlace || fp;
        });
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.places = action.payload;
        
        state.filteredPlaces = state.filteredPlaces.map(fp => {
          const updatedPlace = action.payload.find(p => p.id === fp.id);
          return updatedPlace || fp;
        });
      })
      
      // Error
      .addCase(toggleLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error('Like failed:', action.error);
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error('Favorite failed:', action.error);
      })
      
      // Filtres
      .addCase(applyFilters.fulfilled, (state, action) => {
        state.filteredPlaces = action.payload;
      });
  }
});

export const { setPlaces, setFilter, resetFilters } = placesSlice.actions;
export default placesSlice.reducer;