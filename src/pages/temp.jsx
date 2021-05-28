import React, { useState } from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

BoilingVerdict.propTypes = {
  celsius: PropTypes.number,
};

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

TemperatureInput.propTypes = {
  temperature: PropTypes.string,
  scale: PropTypes.string,
  onTemperatureChange: PropTypes.func,
};

const Temp = () => {
  const [scale, setScale] = useState('c');
  const [temperature, setTempareture] = useState('');

  const handleCelsiusChange = (temp) => {
    setScale('c');
    setTempareture(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale('f');
    setTempareture(temp);
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">摂氏・華氏変換器</h1>
        <div>
          <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
      </div>
    </section>
  );
};

export default Temp;
