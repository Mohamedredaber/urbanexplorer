import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filters/filterSlice";
import placesSlice from "../features/places/PlacesSlice";
import authReducer from '../features/auth/authSlice'
export const Store = configureStore({
  reducer: {
    filters: filtersReducer,
    places: placesSlice,
    auth :authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
