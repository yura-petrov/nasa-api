import { FETCH_WEATHER, CURRENT_WEATHER } from '../actions/types';

const initialState = {
  fetchWeather: [],
  currentWeather: {},
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, fetchWeather: action.payload };
    case CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload};
    default:
      return state;
  }
};
