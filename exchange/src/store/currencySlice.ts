import { createSlice } from "@reduxjs/toolkit";
import { getCurrenciesThank } from "../api/getCurrencies";

type CurrencyItem = {
  Code: string;
  Date: string;
  Diff: string;
  Nominal: string;
  Rate: string;
  Ccy: string;
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
      state.checkCurrency = action.payload.value;
    },
    setUzValue: (state, action) => {
      if (state.checkCurrency === "UZ") {
        console.log("UZ working");
        state.uzValue = action.payload;
        return;
      }
      const result = state.currencies.find((el) => {
        if (el.Ccy === state.checkCurrency) {
          return Number(el.Rate) * Number(action.payload);
        }
      });
      state.uzValue = result ? Number(result.Rate) * Number(action.payload) : 0;
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
export const { setMyValue, setCheckCurrency, setUzValue } =
  currencySlice.actions;
