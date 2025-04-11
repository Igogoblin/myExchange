import "./App.css";
import InputShow from "./components/input/InputShow";
import { useEffect } from "react";
import { getCurrenciesThank } from "./api/getCurrencies";
import { useAppDispatch } from "./hooks/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrenciesThank());
  }, [dispatch]);
  return (
    <main>
      <header>
        сегодня курс: <span className="currencyToday"></span>
      </header>
      <h1>Конвертор валют</h1>
      <p>
        по умолчанию ввод в суммах, для перевода в другую валюту нажмите
        соответствующую кнопку
      </p>
      <div className="forInput">
        <InputShow />
        <button>Конвертировать</button>
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
