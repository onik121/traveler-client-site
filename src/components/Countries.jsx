import { useEffect, useState } from "react";
import Country from "../pages/Country";


const Countries = () => {

    const [countries , setcountries] = useState([])

    useEffect( () => {
        fetch('https://assignment-10-server-red-seven.vercel.app/countries')
        .then( res => res.json())
        .then( data => setcountries(data))
    } ,[])

    return (
        <div className="flex flex-wrap gap-5 country-container">
            {
                countries.map(countrydata => <Country key={countrydata._id} countrydata={countrydata}></Country>)
            }
        </div>
    );
};

export default Countries;