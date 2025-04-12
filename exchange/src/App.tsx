import "./App.css";
import InputShow from "./components/input/InputShow";
import { useEffect } from "react";
import { getCurrenciesThank } from "./api/getCurrencies";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  // const { currencies, loading, error } = useAppSelector((state) => state.currency);

  const currencies = useAppSelector((state) => state.currency.currencies);
  const myValueNow = useSelector((state: RootState) => state.currency.myValue);
  console.log("test", currencies);
  useEffect(() => {
    console.log("dispatching");
    dispatch(getCurrenciesThank());
  }, [dispatch]);
  function getValue(value: number): void {
    console.log("Input value:", value);
  }
  // function showValue
  return (
    <main>
      <header>
        <p>{new Date().toLocaleDateString()}</p>
        сегодня курс:{" "}
        <span className="currencyToday">
          {" "}
          {currencies.length > 0 ? currencies[0]?.Rate : "Загрузка..."}
        </span>
      </header>
      <h1>Конвертор валют</h1>
      <p>
        по умолчанию ввод в суммах, для перевода в другую валюту нажмите
        соответствующую кнопку
      </p>
      <div className="forInput">
        <InputShow getValue={getValue} />
        <button
          className={`${myValueNow ? "activeBtn" : "notActiveBtn"}`}
          disabled={!myValueNow}
        >
          Конвертировать
        </button>
      </div>
      <div className="orderBlock">
        <button value={"USD"} className="choseMoney">
          USD
        </button>
        <button value={"EUR"} className="choseMoney">
          EUR
        </button>
        <button value={"RUB"} className="choseMoney">
          RUB
        </button>
        <button value={"BYN"} className="choseMoney">
          BYN
        </button>
      </div>
      <div className="showValue">
        <div>курс USD to UZB - </div>
        <div className="correlation"></div>
        <div> итого: </div>
        <div className="result"></div>
      </div>
    </main>
  );
}

export default App;
