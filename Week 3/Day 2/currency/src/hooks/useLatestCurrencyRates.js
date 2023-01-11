import { useEffect, useState } from "react";
import env from "react-dotenv";

const useLatestCurrencyRates = () => {
  const API_KEY = env.API_KEY;
  const domain = env.API_URL;
  const endPoint = `${domain}/latest?apikey=${API_KEY}`;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch(endPoint)
      .then((res) => res.json())
      .then((dt) => {
        setData(dt);
        setIsLoading(false);
      });
  }, [endPoint]);

  return { data, isLoading };
};

export default useLatestCurrencyRates;
