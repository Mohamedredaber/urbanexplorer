import {createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPlaces } from './PlacesApi'
export const  loadPlaces  =createAsyncThunk(
  'places/load',
  async({term ,lat , lng})=>{
    return await fetchPlaces(term, lat ,lng)
  }
)
const initialState ={
   list: [],
    status: "idle",
    error: null,
}
const placesSlice = createSlice({
  name :"places",
  initialState ,
  reducers  :{},
  extraReducers :builder =>{
    builder
      .addCase(loadPlaces.pending , state=>{
        state.status = 'looding'
      })
      .addCase(loadPlaces.fulfilled ,(state,action)=>{
        state.status ='succeeded' ;
        state.list = action.payload
      })
      .addCase(loadPlaces.rejected , (state,action)=>{
        state.status ='failed';
        state.error = action.error.message
      })
  }
})
export default placesSlice.reducer