import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setMyValue } from "../../store/currencySlice";

type InputShowProps = {
  getValue: (value: number) => void;
};

const InputShow = ({ getValue }: InputShowProps) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    setValue(inputValue);
    getValue(inputValue ? parseInt(inputValue) : 0);
    dispatch(setMyValue(value));
  };
  return (
    <input
      value={value}
      onChange={handleChange}
      type="number"
      min={0}
      step={0.01}
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 height-32"
      placeholder="Enter ..."
    />
  );
};
export default InputShow;
