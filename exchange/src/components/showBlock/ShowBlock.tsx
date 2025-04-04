import { useEffect, useState } from "react";
import { getCurrencies } from "../../api/api";

const ShowBlock = () => {
  const [currencies, setCurrencies] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrencies();
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Курсы валют</h1>
      {/* {currencies ? (
      
    ) : (
      <p>Загрузка...</p>
    )} */}
    </div>
  );
};
export default ShowBlock;
