import "./App.css";
// import InputShow from "./components/input/InputShow";
import { useEffect } from "react";
import { getCurrenciesThank } from "./api/getCurrencies";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
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
  // const { currencies, loading, error } = useAppSelector((state) => state.currency);

  const currencies = useAppSelector((state) => state.currency.currencies);
  const myValueNow = useSelector((state: RootState) => state.currency.myValue);
  const state = useAppSelector((state) => state.currency);
  // console.log("test", currencies);
  useEffect(() => {
    console.log("dispatching");
    dispatch(getCurrenciesThank());
  }, [dispatch]);
  // function getValue(value: number): void {
  //   console.log("Input value:", value);
  // }
  function showResult(item: CurrencyButton) {
    console.log("push the button", item);
    console.log(myValueNow);
    const showValue = document.getElementsByClassName(
      `result ${item.value}`
    )[0];
    // const correlation = document.querySelector(".correlation");
    console.log(showValue);
    if (showValue) {
      showValue.textContent = `${
        myValueNow * (Number(currencies[0]?.Rate) || 0)
      }`;
    }
    dispatch(setCheckCurrency({ value: item.value }));
    console.log("item", item);
    console.log("state ", state);
  }
  // function showValue() {
  //   console.log("we get result with state: ", myValueNow);
  //   console.log("currencies", currencies);
  // }
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
        <ShowBlock item={item} />
        // <div className="showValue" key={item}>
        //   <div>курс {item} to UZB - </div>
        //   <div className={`correlation ${item}`}></div>
        //   <div> итого: </div>
        //   <div className={`result ${item}`}></div>
        // </div>
      ))}
      {/* <div className="showValue" onClick={showValue}>
        <div>курс USD to UZB - </div>
        <div className="correlation"></div>
        <div> итого: </div>
        <div className="result USD"></div>
      </div> */}
    </main>
  );
}

export default App;
