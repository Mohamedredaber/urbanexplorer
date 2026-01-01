import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filters/filterSlice";
import placesSlice from "../features/places/PlacesSlice";
export const Store = configureStore({
  reducer: {
    filters: filtersReducer,
    places: placesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
