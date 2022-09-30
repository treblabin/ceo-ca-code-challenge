import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReduxCryptoDataType } from "../../assets/types/CryptoData";
import { apis } from "../api";

export const getBitcoinPrice = createAsyncThunk(
  "users/getBitcoinPrice",
  async () => {
    const response = await apis.getBitcoinPrice();
    console.log(response.data);
    return response.data;
  }
);

const initialState: ReduxCryptoDataType = {
  error: null,
  loading: false,
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
  extraReducers: {
    [getBitcoinPrice.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBitcoinPrice.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    },
    [getBitcoinPrice.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
  initialState,
  name: "crypto",
  reducers: {},
});

export default CryptoSlice.reducer;
