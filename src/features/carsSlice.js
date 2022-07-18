import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await fetch("http://localhost:3004/cars");
  const cars = await response.json();
  return cars;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    carAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchCars.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchCars.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { carAdded } = carsSlice.actions;

export default carsSlice.reducer;