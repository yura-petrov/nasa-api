import React from 'react';
import './Day.css';

import { useDispatch } from 'react-redux';
import { currentWeather } from '../../redux/actions/action';

export default ({ day }) => {
  let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const dispatch = useDispatch();
  dispatch(currentWeather(day));

  return (
    <div className="card" onClick={() => dispatch(currentWeather(day))}>
      <p className="temperature">{Math.round(day.AT.av)} &#8457;</p>
      <p className="date">
        {new Date(day.Last_UTC).toLocaleDateString('en-US', options)}
      </p>
    </div>
  );
};
