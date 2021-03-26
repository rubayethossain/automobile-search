import { useCallback, useEffect, useState } from "react";
import { useStore } from "react-redux";

export default function useCarDetails(car_id) {
  const [carDetails, setCarDetails] = useState({ comments: [] });
  const store = useStore();

  const getCarDetails = useCallback(
    (car_id) => {
      const { cars } = store.getState();

      // eslint-disable-next-line eqeqeq
      const searchResult = cars.find((car) => car.id == car_id);

      setCarDetails(searchResult);
    },
    [store]
  );

  useEffect(() => {
    if (car_id) getCarDetails(car_id);
  }, [getCarDetails, car_id]);

  return carDetails;
}
