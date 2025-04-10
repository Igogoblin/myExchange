import "./App.css";
import InputShow from "./components/input/InputShow";

function App() {
  return (
    <section>
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
    </section>
  );
}

export default App;
