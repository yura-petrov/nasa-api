import React from 'react';
import './FullInfo.css';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoIosArrowBack } from 'react-icons/io';
import { FiWind } from 'react-icons/fi';
import { AiOutlineCompress } from 'react-icons/ai';
import { GiPlanetCore } from 'react-icons/gi';

const FullInfo = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/');
  }

  const days = useSelector((state) => state.posts.currentWeather);

  if (Object.keys(days).length === 0) {
    return <p>qw</p>;
  }

  return (
    <div className="main-block">
      <div className="left-block">
        <div className="btn-block">
          <button onClick={handleClick} className="btn-back">
            <IoIosArrowBack className="btn-icon" />
          </button>
        </div>
        <GiPlanetCore className="planet-icon" />
        <div className="main-temp"> {Math.round(days.AT.av)} &#8457; </div>
        <div>
          {Math.round(days.AT.mn)} &#8457;  /  
          {Math.round(days.AT.mx)} &#8457;
        </div>
        <div className="season">Season: {days.Season} </div>
      </div>
      <div className="right-block">
        <div className="air-pressure">
          <p>
            <AiOutlineCompress className="icon" />
             Air Pressure
          </p>
          <span className="temp">{Math.round(days.PRE.av)} PS</span>
        </div>
        <div className="wind-speed">
          <p>
            <FiWind className="icon" />
             Wind Speed
          </p>
          <span className="temp">{days.HWS.av.toFixed(1)} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default FullInfo;
