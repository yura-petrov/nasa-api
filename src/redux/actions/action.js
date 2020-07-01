import {
  FETCH_WEATHER,
  CURRENT_WEATHER,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./types";

export function fetchWeather() {
  return async (dispatch) => {
    const response = await fetch(
      "https://api.nasa.gov/insight_weather/?api_key=tEnlH3cjR3cii1rjX7NCvL3h6dX8ma1RiAOazgDK&feedtype=json&ver=1.0"
    );
    const json = await response.json();
    dispatch({ type: FETCH_WEATHER, payload: json });
  };
}

export function currentWeather(w) {
  return {
    type: CURRENT_WEATHER,
    payload: w,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
