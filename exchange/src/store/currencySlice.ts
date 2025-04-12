import { createSlice } from "@reduxjs/toolkit";
import { getCurrenciesThank } from "../api/getCurrencies";

type CurrencyItem = {
  Code: string;
  Date: string;
  Diff: string;
  Nominal: string;
  Rate: string;
};

type CurrencyState = {
  currencies: CurrencyItem[];
  myValue: number;
  loading: boolean;
  error: string | null;
};

const initialState: CurrencyState = {
  currencies: [],
  myValue: 0,
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setMyValue: (state, action) => {
      state.myValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrenciesThank.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrenciesThank.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.loading = false;
      })
      .addCase(getCurrenciesThank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при загрузке данных";
      });
  },
});

export default currencySlice.reducer;
export const { setMyValue } = currencySlice.actions;
