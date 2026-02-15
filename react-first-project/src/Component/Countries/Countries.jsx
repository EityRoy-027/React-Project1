import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

    //to show visited counries
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    const handleVisitedCountries = (country) => {
    console.log('Visited country clicked', country);

        //Liftup-state-to show visited country numbers
        const totalvisitedCountries= [...visitedCountries,country];
        setVisitedCountries(totalvisitedCountries);
        console.log(visitedCountries);
    }

    const handleVisitedFlags = (flag) =>{
        console.log("flag added",flag);
        const newVisitedFlags= [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }

    console.log(countries);
    return (
        <div className>

           <h1>Total Contries : {countries.length}</h1>
           <h3>Visited Countries:{visitedCountries.length} </h3>
           <h3>Total Flags visited : {visitedFlags.length}</h3>
        
        <ol>
            {
                visitedCountries.map( country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ol>

        <div className='flagdiv'>
            {
                visitedFlags.map( flag => <img src={flag} style={{width:"50px", height:"50px"}}></img>)
            }
        </div>
           <div className='Countries'>
        {
            countries.map( country => <Country 
                 key={country.cca3.cca3}
                country={country}
                handleVisitedCountries={handleVisitedCountries }
                handleVisitedFlags ={handleVisitedFlags}> 
                </Country>)
        }
        </div>
        </div>
    );
};

export default Countries;