import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

    //to show visited counries
     const [visitedCountries,setVisitedCountries] = useState([]);
    
     const handleVisitedCountries = (country) => {
       
        console.log('Visited country clicked', country);

        //to show visited country numbers
        const totalvisitedCountries= [...visitedCountries,country];
        setVisitedCountries(totalvisitedCountries);
    }

    console.log(countries);
    return (
        <div className>

           <h1>In the contries : {countries.length}</h1>
           <h3>Visited Countries: </h3>

           <div className='Countries'>
        {
            countries.map( country => <Country 
                 key={country.cca3.cca3}
                country={country}
                handleVisitedCountries={handleVisitedCountries }> 
                </Country>)
        }
        </div>
        </div>
    );
};

export default Countries;