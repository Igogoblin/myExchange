import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setMyValue, setUzValue } from "../../store/currencySlice";
import { useAppSelector } from "../../hooks/hooks";

const InputShow = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const state = useAppSelector((state) => state.currency);
  console.log("state ", state);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    setValue(inputValue);
  };
  const getValue = () => {
    dispatch(setMyValue(value));
    dispatch(setUzValue(value));
    console.log("setValue - ", value);
  };
  // const actualValue = (value: string) => {
  //   if (state.checkCurrency === "UZ") {
  //     return value;
  //   }
  //   let result: number = 0;
  //   state.currencies.find((el) => {
  //     console.log("el |||||||||||||||||||||||||", el.);
  //     if (state.checkCurrency === el.Ccy) {
  //       result = state.myValue * (Number(el.Rate) || 0);
  //     }
  //     return el;
  //   });
  //   return result;
  // };
  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type="number"
        min={0}
        step={0.01}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 height-32"
        placeholder="Enter ..."
      />
      <button onClick={getValue}>Конвертировать</button>
    </div>
  );
};
export default InputShow;
