import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country);
    return (
        <div className='Country'>
            <img style={{height:'150px', width:'150px'}} src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:{country.name.common}</h2>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area}</p>
            <p>Region: {country.region.region}</p>
            <p>languages: {country.languages.languages.eng}</p>
        </div>
    );
};

export default Country;