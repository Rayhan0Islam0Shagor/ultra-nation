import React from 'react';

const Cart = (props) => {
    const selectedCountry = props.selectedCountry;
    // let totalPopulation = 0;
    // for (let i = 0; i < selectedCountry.length; i++) {
    //     const country = selectedCountry[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = selectedCountry.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>Selected Country: {selectedCountry.length} </h2>
            <p><strong> Total Population: {totalPopulation} </strong></p>
        </div>
    );
};

export default Cart;