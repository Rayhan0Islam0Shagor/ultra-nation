import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Country = (props) => {
    console.log(props)
    const { name, capital, population, region, flag, area, callingCodes } = props.country;
    const handleAddCountry = props.handleAddCountry;

    return (
        <div style={{ backgroundColor: "gray", borderRadius: "10px", display: "flex", marginBottom: "30px", textAlign: "justify", marginLeft: "150px", marginRight: "150px", border: "1px solid black", padding: "50px" }}>
            <div>
                <img style={{ width: "250px", marginTop: "20px", marginRight: "30px" }} src={flag} alt="" />
            </div>
            <div>
                <h1>Country - {name}</h1>
                <h3>Capital: {capital}</h3>
                <h5>Population: {population} </h5>
                <p><small><strong>Region: {region}</strong></small></p>
                <button onClick={() => handleAddCountry(props.country)} style={{ width: "130px", height: "30px", backgroundColor: "#3c2c3e", color: "#fbd46d", borderRadius: "5px" }}> <FontAwesomeIcon icon={faPlusSquare} />  Add Country</button>
            </div>
            <div style={{ marginLeft: "80px", paddingTop: "110px" }}>
                <h5> Area - {area} square feet </h5>
                <h5>Calling Code : +{callingCodes}-XXXXXXX</h5>
            </div>
        </div>
    );
};

export default Country;