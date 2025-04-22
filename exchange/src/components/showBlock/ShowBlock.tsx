import { useAppSelector } from "../../hooks/hooks";
import style from "./ShowBlock.module.css";

type ShowBlockProps = {
  item: string;
};
const ShowBlock = ({ item }: ShowBlockProps) => {
  const state = useAppSelector((state) => state.currency);

  function showResult(item: string) {
    let result: number = 0;

    state.currencies.find((el) => {
      if (item === el.Ccy) {
        result = parseFloat((state.uzValue / Number(el.Rate)).toFixed(2));
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
