import { createSelector } from "reselect";

const defaultState = {
  carsById: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return {
        carsById: {
          ...state.carsById,
          [action.payload.id]: action.payload
        }
      };
    case "INCREMENT_MILEAGE":
      return {
        carsById: {
          ...state.carsById,
          [action.payload.id]: {
            ...state.carsById[action.payload.id],
            mileage: state.carsById[action.payload.id].mileage + 1
          }
        }
      };
    case "CHANGE_SPEED":
      return {
        carsById: {
          ...state.carsById,
          [action.payload.id]: {
            ...state.carsById[action.payload.id],
            speed: action.payload.speed
          }
        }
      };
    default:
      return state;
  }
};

// action creators
export const addCar = (id, name, mileage, speed) => ({
  type: "ADD_CAR",
  payload: { id, name, mileage, speed }
});

export const incrementMileage = id => ({
  type: "INCREMENT_MILEAGE",
  payload: { id }
});

export const changeSpeed = (id, speed) => ({
  type: "CHANGE_SPEED",
  payload: { id, speed }
});

// selectors
const carsSelector = state => Object.values(state.carsById);

export const speedsSelector = createSelector(carsSelector, cars =>
  cars.map(car => ({ name: car.name, speed: car.speed }))
);

export const mileagesSelector = createSelector(carsSelector, cars =>
  cars.map(car => ({ name: car.name, mileage: car.mileage }))
);
