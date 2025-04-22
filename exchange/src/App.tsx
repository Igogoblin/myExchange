import "./App.css";
import { useEffect } from "react";
import { getCurrenciesThank } from "./api/getCurrencies";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import InputShow from "./components/input/InputShow";
import { setCheckCurrency } from "./store/currencySlice";
import ShowBlock from "./components/showBlock/ShowBlock";

type CurrencyButton = {
  value: string;
};

const interestCurrencyButtons: CurrencyButton[] = [
  { value: "USD" },
  { value: "EUR" },
  { value: "RUB" },
  { value: "BYN" },
  { value: "UZ" },
];

function App() {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.currency);

  useEffect(() => {
    dispatch(getCurrenciesThank());
  }, [dispatch]);
  function showResult(item: CurrencyButton) {
    dispatch(setCheckCurrency({ value: item.value }));
  }

  return (
    <main>
      <header>
        <p>{new Date().toLocaleDateString()}</p>
        сегодня курс:{" "}
        <span className="currencyToday">
          {" "}
          {state.currencies.length > 0
            ? state.currencies[0]?.Rate
            : "Загрузка..."}
        </span>
      </header>
      <h1>Конвертор валют</h1>
      <p className="description">
        по умолчанию ввод в суммах, для перевода в другую валюту нажмите
        соответствующую кнопку
      </p>
      <p>Сейчас вводится в {state.checkCurrency}</p>
      <InputShow />
      <div className="orderBlock">
        {interestCurrencyButtons.map((item) => (
          <button
            key={item.value}
            value={item.value}
            className={`choseMoney ${
              item.value === state.checkCurrency ? "buttonActive" : ""
            }`}
            onClick={() => showResult(item)}
          >
            {item.value}
          </button>
        ))}
      </div>
      {["USD", "BYN", "RUB"].map((item) => (
        <ShowBlock item={item} key={item} />
      ))}
    </main>
  );
}

export default App;
