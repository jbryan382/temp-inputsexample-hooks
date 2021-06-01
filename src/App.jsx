// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Slider from './components/Slider';

export function App() {
  const [temp, setTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(Math.floor(Math.random() * 100));

  // useEffect(() => {
  //   setMaxTemp(Math.floor(Math.random() * maxTemp))
  // }, []);

  function updateTemp(event) {
    setTemp(event.target.value)
  }

  function updateMaxTemp(event) {
    setMaxTemp(event.target.value)
  }

  function convertC() {
    return temp - 273.15
  }
  return (
    <>
      <main>
        <h1>Temperature in °K</h1>
        <div style={{
          backgroundColor: `hsl(0, 100%, ${temp}%)`
        }}>
          <Slider mTemp={maxTemp} tempValue={temp} handleInput={updateTemp} />
        </div>
        <div>
          <label> Change Max Temp:
            <input type="text" onChange={updateMaxTemp} />
          </label>
          <h3>Your Current Temperature:</h3>
          <ul>
            <li>{temp}°K</li>
            <li>{convertC()}°C</li>
            <li>{(temp - 273.15) * 1.8 + 32}°F</li>
          </ul>
        </div>
      </main>
    </>
  )
}
