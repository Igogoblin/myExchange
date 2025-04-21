import { useAppSelector } from "../../hooks/hooks";
import style from "./ShowBlock.module.css";

type ShowBlockProps = {
  item: string;
};
const ShowBlock = ({ item }: ShowBlockProps) => {
  const currencies = useAppSelector((state) => state.currency.currencies);
  const myValueNow = useAppSelector((state) => state.currency.myValue);
  //   const currencyBYN = currencies.find((el) => el.Ccy === "BYN");
  //   const currencyUSD = currencies.find((item) => item.Code === "USD");
  //   const currencyEUR = currencies.find((item) => item.Code === "EUR");
  // const currencyRUB = currencies.find((item) => item.Code === "RUB");
  //   console.log(currencyBYN);
  function showResult(item: string) {
    switch (item) {
      case "USD":
        return (myValueNow * (Number(currencies[0]?.Rate) || 0)).toFixed(2);
      case "EUR":
        return (myValueNow * (Number(currencies[1]?.Rate) || 0)).toFixed(2);
      case "RUB":
        return (myValueNow * (Number(currencies[2]?.Rate) || 0)).toFixed(2);
      case "BYN":
        return (myValueNow * (Number(currencies[11]?.Rate) || 0)).toFixed(2);
    }
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
