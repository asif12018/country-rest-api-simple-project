
import { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountry}) => {
    
    const {name,flags,population,area,cca3} = country;
    
    //using state to apply conditional css or p
    const [visited, setVisited] = useState(false);
    //function for visited state
    const handleVsited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple': 'white'}}>{name?.common}</h3>
            <img  src={flags?.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVsited}>{visited ? 'Visited': 'going'}</button>
            {/* {
                visited ? <button disabled onClick={handleVsited}>Visited</button> : <button  onClick={handleVsited}>Visited</button>
            } */}
            {
                visited && <p>i have visited this country</p>
            }
        </div>
    );
};

export default Country;