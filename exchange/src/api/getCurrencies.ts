import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrenciesThank = createAsyncThunk(
  "currency/getCurrencies",
  async () => {
    const today = new Date().toISOString().split("T")[0];
    const cachedData = localStorage.getItem("currencies");

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (parsedData.date === today) {
        return parsedData.data;
      }
    }

    const response = await fetch(
      `https://cbu.uz/ru/arkhiv-kursov-valyut/json/`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("data ", data);
    localStorage.setItem("currencies", JSON.stringify({ date: today, data }));
    console.log("data from server ", data);
    return data;
  }
);

export function getCurrenctyItem() {}
