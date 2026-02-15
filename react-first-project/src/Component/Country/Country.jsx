import React, { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountries }) => {
    console.log(country);
    console.log(handleVisitedCountries );
    const [ visited , setVisited] = useState( false );

    const handleVisited = () =>{
      // setVisited( true )
    
    //when click>1

      //normal way
    //   if(visited){
    //     setVisited(false)
    //   }
    //   else{
    //     setVisited(true)
    //   }

    //ternary
    // setVisited( visited ? false : true)

    //using !
    setVisited( !visited )
    handleVisitedCountries (country)
    }

    return (
          // <div className={`Country ${visited && 'country-visited'}`}> 
          // using ternary
          <div className={`Country ${visited ? 'country-visited' :''}`}>
            <img style={{height:'150px', width:'150px'}} src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:{country.name.common}</h2>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>languages: {country.languages.languages.eng}</p>
            {/* conditions */}
            <p>Population: {country.population.population} { country.population.population >200000 ? "High Population" : "Low Population" }</p>
            <p>Area: {country.area.area} { country.area.area > 300000 ? "Big Country" : "Small Country"}</p>

            <button style={{width:"110px", height:"45px" , borderRadius: "10px", border:"none", backgroundColor: "silver", fontWeight: "bold" , padding:"5px"}} onClick={handleVisited}>
                {visited  ? "Visited" : "Not Visited" }
                </button>
        </div>
    );
};

export default Country;