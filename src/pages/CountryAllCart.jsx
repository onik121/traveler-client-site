import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CountryAllCart = () => {

    const country = useLoaderData()

    const [datas, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tourspot/country/${country.countryName}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [country])

    return (
        <div className="max-w-[1440px] mx-auto px-5">
            {country.countryName} {datas.length}
        </div>
    );
};

export default CountryAllCart;