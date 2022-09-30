import { configureStore } from "@reduxjs/toolkit";
import Crypto from "./Crypto";

export const store = configureStore({
  reducer: {
    Crypto: Crypto,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
