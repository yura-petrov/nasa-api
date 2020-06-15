import React, { useState, useEffect } from 'react';
import './Test.css';

const Test = () => {
  let [count, setCount] = useState(0);

  let time = new Date().toString();

  setInterval(() => {
    time = new Date().toString();
    console.log(1)
  }, 1*1000);

  return (
    <div className="test-block">
      <h1 className="test-header">test</h1>
      <p> {count} </p>
      <button onClick={() => setCount(count + 1)}>X</button>
      <p>{time}</p>
    </div>
  );
};

export default Test;
