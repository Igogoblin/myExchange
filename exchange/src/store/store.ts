import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
