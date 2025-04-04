import "./App.css";
import Button from "./components/button/button";
import InputShow from "./components/input/InputShow";
import ShowBlock from "./components/showBlock/ShowBlock";
// import { getCurrencies } from "./api/api";

function App() {
  // const currencyNow = getCurrencies("USD");
  // console.log(currencyNow);
  return (
    <section>
      <h1> Конвертор валют </h1>
      <InputShow></InputShow>
      <Button name={"name"}></Button>
      <div>
        <Button name={"USD"}></Button>
        <Button name={"RUB"}></Button>
        <Button name={"BYN"}></Button>
      </div>
      <h2> Результат </h2>
      <ShowBlock></ShowBlock>
    </section>
  );
}

export default App;
