import { configureStore } from "@reduxjs/toolkit";
import {afiliateSlice} from "./afiliateStore/afiliateSlice";


export const store = configureStore({
  reducer: {
    afiliate: afiliateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;