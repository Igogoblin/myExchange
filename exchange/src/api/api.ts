// const url =
//   "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/currency";
// const token = "1715de936c1d110f0fb606790f95198058e2e495";

// // type Currency = {
// //   method: string;
// //   mode: string;
// //   headers: {
// //     "Content-Type": string;
// //     Accept: string;
// //     Authorization: string;
// //   };
// //   body: string;
// // };

// const options: RequestInit = {
//   method: "POST",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Token ${token}`,
//   },
//   body: JSON.stringify({
//     query: "RUB",
//   }),
// };

// export const getCurrencies = async () => {
//   const today = new Date().toISOString().split("T")[0];
//   const url = `https://api.exchangerate.host/${today}`;
//   const cachedData = localStorage.getItem("currencies");
//   console.log("this is cachedData - ", cachedData);
//   if (cachedData) {
//     const parsedData = JSON.parse(cachedData);
//     if (parsedData.date === today) {
//       return parsedData.data;
//     }
//   }
//   try {
//     console.log("Fetching data from API...");
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     localStorage.setItem("currencies", JSON.stringify({ date: today, data }));
//     console.log("Data fetched from API:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// export const getCurrenciesDadata = async () => {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("Dadata API data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data from Dadata API:", error);
//     throw error;
//   }
// };
// const url =
//   "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/currency";
// const token = "1715de936c1d110f0fb606790f95198058e2e495";
// const query = "руб";

// type Currency = {
//   method: string;
//   mode: RequestMode;
//   headers: {
//     "Content-Type": string;
//     Accept: string;
//     Authorization: string;
//   };
//   body: string;
// };

// const options: Currency = {
//   method: "POST",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: "Token " + token,
//   },
//   body: JSON.stringify({ query: query }),
// };
// export function getCurrencies() {
//   fetch(url, options)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

// codes = {
//   USD: "840",
//   EUR: "978",
//   RUB: "643",
//   BYN: "933",
// };

export const getCurrencies = async () => {
  const today = new Date().toISOString().split("T")[0];
  const cachedData = localStorage.getItem("currencies");

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (parsedData.date === today) {
      console.log("Loaded from cache:", parsedData.data);
      return parsedData.data;
    }
  }

  try {
    const response = await fetch(
      `https://cbu.uz/ru/arkhiv-kursov-valyut/json/`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    localStorage.setItem("currencies", JSON.stringify({ date: today, data }));
    console.log("Data fetched successfully:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
