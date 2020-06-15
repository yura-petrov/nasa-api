import React from 'react';
import './WeatherPosts.css';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchWeather } from '../../redux/actions/action';

import Day from '../Day/Day';
import FullInfo from '../FullInfo/FullInfo';

const WeatherPosts = () => {
  const dispatch = useDispatch();
  const days = useSelector((state) => state.posts.fetchWeather);

  if (Object.keys(days).length === 0) {
    dispatch(fetchWeather());
    return <CircularProgress color="inherit" className="progress-bar" />;
  }

  return (
    <div className="main">
      <FullInfo />
      <div className="days">
        {days.sol_keys.map((day) => (
          <Day day={days[day]} key={days[day]['First_UTC']} />
        ))}
      </div>
    </div>
  );
};

export default WeatherPosts;
