import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
import { ReduxCryptoDataType } from "../../assets/types/CryptoData";

const initialState: ReduxCryptoDataType = {
  value: {
    bpi: {
      EUR: {
        code: "",
        description: "",
        rate: "",
        rate_float: 0,
        symbol: "",
      },
      GBP: {
        code: "",
        description: "",
        rate: "",
        rate_float: 0,
        symbol: "",
      },
      USD: {
        code: "",
        description: "",
        rate: "",
        rate_float: 0,
        symbol: "",
      },
    },
    chartName: "",
    disclaimer: "",
    time: {
      updated: "",
      updatedISO: "",
      updateduk: "",
    },
  },
};

export const CryptoSlice = createSlice({
  initialState,

  name: "crypto",
  reducers: {
    loadCrypto: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadCrypto } = CryptoSlice.actions;

export const selectCount = (state: RootState) => state.Crypto.value;

export default CryptoSlice.reducer;
