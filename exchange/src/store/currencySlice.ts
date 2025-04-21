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
  checkCurrency: string;
  uzValue: number;
  loading: boolean;
  error: string | null;
};

const initialState: CurrencyState = {
  currencies: [],
  myValue: 0,
  checkCurrency: "UZ",
  uzValue: 0,
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
    setCheckCurrency: (state, action) => {
      // const { value } = action.payload;
      state.checkCurrency = action.payload.value;
      // if (state.checkCurrency.includes(value)) {
      //   state.checkCurrency = state.checkCurrency.filter(
      //     (item) => item !== value
      //   );
      // } else {
      //   state.checkCurrency.push(value);
      // }
    },
    setUzValue: (state, action) => {
      //
      // state.uzValue = action.payload.value
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
export const { setMyValue, setCheckCurrency } = currencySlice.actions;
