import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataValues: {
    restaurantImage: "",
    restaurantName: "",
    isOpen: "",
    restaurantDescription: "",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    restaurantDetails: (state, action) => {
      state.dataValues = action.payload;
    },
  },
});

export const { restaurantDetails } = counterSlice.actions;

export const restDeta = (state) => state.counter.dataValues;

export default counterSlice.reducer;
