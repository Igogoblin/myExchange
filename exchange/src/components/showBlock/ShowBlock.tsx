import { useAppSelector } from "../../hooks/hooks";
import style from "./ShowBlock.module.css";

type ShowBlockProps = {
  item: string;
};
const ShowBlock = ({ item }: ShowBlockProps) => {
  // const currencies = useAppSelector((state) => state.currency.currencies);
  const state = useAppSelector((state) => state.currency);
  console.log(state);
  //   const currencyBYN = currencies.find((el) => el.Ccy === "BYN");
  //   const currencyUSD = currencies.find((item) => item.Code === "USD");
  //   const currencyEUR = currencies.find((item) => item.Code === "EUR");
  // const currencyRUB = currencies.find((item) => item.Code === "RUB");
  //   console.log(currencyBYN);
  function showResult(item: string) {
    // const numericItem = Number(item);
    let result: number = 0;
    if (state.checkCurrency === "UZ") {
    }
    state.currencies.find((el) => {
      if (item === el.Ccy) {
        result = state.myValue * (Number(el.Rate) || 0);
      }
    });

    return result;
  }
  return (
    <div className={style.showValue} key={item}>
      <div>курс {item} - </div>
      <div className={`correlation ${item}`}></div>
      <div> итого: </div>
      <div className={`result ${item}`}>{showResult(item)}</div>
    </div>
  );
};
export default ShowBlock;
