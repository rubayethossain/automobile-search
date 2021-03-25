import { useCallback, useEffect, useState } from "react";
import { useStore } from "react-redux";

export default function useSearchCar(searchQuery) {
  const [result, updateResult] = useState([]);
  const store = useStore();

  const searchCars = useCallback(
    (query) => {
      const { cars } = store.getState();

      const searchResult = cars.filter(
        (car) => car.title.includes(query) || car.brand.includes(query)
      );

      console.log(searchResult);

      updateResult(searchResult);
    },
    [store]
  );

  useEffect(() => {
    if (searchQuery) searchCars(searchQuery);
  }, [searchCars, searchQuery]);

  return result;
}
