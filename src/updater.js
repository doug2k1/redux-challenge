import { addCar, incrementMileage, changeSpeed } from "./store";

export default {
  start(dispatch) {
    dispatch(addCar(1, "Ferrari", 0, 0));
    dispatch(addCar(2, "Porsche", 0, 0));

    setInterval(() => {
      dispatch(changeSpeed(1, parseInt(Math.random() * 300, 10)));
    }, 1000);
  }
};
