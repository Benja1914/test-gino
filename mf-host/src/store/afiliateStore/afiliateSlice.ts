import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Afiliate } from "./interfaces";

const initialState: Afiliate = {
  name: '',
  lastName: ''
};

export const afiliateSlice = createSlice({
  name: "afiliate",
  initialState,
  reducers: {
    setAfiliate: (state: any, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
    },
  },
});

// Pendiente crear loading

export const {
  setAfiliate,
} = afiliateSlice.actions;

export default afiliateSlice.reducer;
