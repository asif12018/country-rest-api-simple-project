import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    //set country data using useState
    const [countries,setCountries] = useState([]);
    //load data using use effect
    useEffect(()=>{
      const fetchData = async() =>{
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
      }
      fetchData();
      console.log(countries);
    },[]);



    //declare state to create list for visited country
    const [visitedCountry, setVisitedCountry] = useState([]);
    let countryList = [];
    //function for vistedCountry state
    const handleVisitedCountry = (country) =>{
      
      //adding country name array in setVisitedCountry function
      const newVisitedCountries = [...visitedCountry, country];
      setVisitedCountry(newVisitedCountries);

    }
    
    

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
              <h5>Visited countries</h5>
              <ul>
                {
                  visitedCountry.map(country=> <li>{country.name.common}</li>)
                }
              </ul>
            </div>
            
            <div className="country-container">
            {
                countries.map(country => <Country country={country} key={country?.cca3} handleVisitedCountry={handleVisitedCountry} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;