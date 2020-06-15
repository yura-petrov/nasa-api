import React from 'react';
import './NotFound.css';

import { useHistory } from 'react-router-dom';

const NotFound = () => {
  let history = useHistory();
  function handleClick() {
    history.push('/');
  }

  return (
    <div className="page">
      <div className="info">
        <div>
          <button onClick={handleClick} className="btn">
            Go home
          </button>
        </div>
        <div>
          <p className="text heading">Oh noo...</p>
          <p className="text">It looks like this page has been stolen</p>
        </div>
      </div>
      <img
        src="https://i.ibb.co/JtT1XYw/404.png"
        className="not-found"
        alt="error-pic"
      />
    </div>
  );
};

export default NotFound;
