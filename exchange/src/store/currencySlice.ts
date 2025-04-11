import { createSlice } from "@reduxjs/toolkit";
import { getCurrenciesThank } from "../api/getCurrencies";

type CurrencyItem = {
  code: string;
  date: string;
  diff: string;
  nominal: string;
  rate: string;
};

type CurrencyState = {
  currencies: CurrencyItem[];
  loading: boolean;
  error: string | null;
};

const initialState: CurrencyState = {
  currencies: [],
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
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
