// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Slider from './components/Slider';

export function App() {
  // We are storing data here
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

  function handleClassName() {
    if (temp / maxTemp < .25) {
      return 'fa-thermometer-quarter'
    }
    if (temp / maxTemp < .5) {
      return 'fa-thermometer-half'
    }
    if (temp / maxTemp < .75) {
      return 'fa-thermometer-three-quarters'
    }
    return 'fa-thermometer-full'
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
          <i className={`fas ${handleClassName()}`}></i>
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
