import { useAppSelector } from "../../hooks/hooks";
import style from "./ShowBlock.module.css";

type ShowBlockProps = {
  item: string;
};
const currencySymbols: { [key: string]: string } = {
  USD: " $",
  EUR: " €",
  RUB: " ₽",
  BYN: " Br",
};
const ShowBlock = ({ item }: ShowBlockProps) => {
  const state = useAppSelector((state) => state.currency);

  function showResult(item: string) {
    let result: number = 0;
    if (!state || !state.currencies) return null;

    const currency = state.currencies.find((el) => el.Ccy === item);
    if (currency) {
      result = parseFloat((state.uzValue / Number(currency.Rate)).toFixed(2));
    }

    return result;
  }
  return (
    <div className={style.showValue} key={item}>
      <div>курс {item} - </div>
      <div className={`correlation ${item}`}></div>
      <div> итого: </div>
      <div className={`result ${item}`}>
        {showResult(item)}
        {currencySymbols[item] || ""}
      </div>
    </div>
  );
};
export default ShowBlock;
