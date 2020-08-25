import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './Components/Country';
import Cart from './Components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);



  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        const names = data.map(country => country.name);
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newSelected = [...selectedCountry, country];
    setSelectedCountry(newSelected);
  };

  return (
    <div style={{ backgroundColor: "#1a1a2e", width: "100%", color: "#dddddd", textAlign: "center" }}>
      <h1>Country Loaded: {countries.length}</h1>
      <h2>Country Added: {selectedCountry.length}</h2>
      <Cart selectedCountry={selectedCountry}></Cart>
      {
        countries.map(country => <Country key={country.alpha3Code} handleAddCountry={handleAddCountry} country={country}></Country>)
      }
    </div>
  );
}

export default App;
