import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Countries = () => {

    const [countries , setcountries] = useState([])

    useEffect( () => {
        fetch('https://assignment-10-server-red-seven.vercel.app/countries')
        .then( res => res.json())
        .then( data => setcountries(data))
    } ,[])

    // console.log(countries)

    return (
        <div className="flex justify-around gap-5">
            {
                countries.map(country => <Link key={country._id} to={`country/${country._id}`}>
                    <div className="w-[200px] h-[200px] rounded-full bg-green-200 flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full" src={country.image}></img>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Countries;