import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryCart from "../components/CountryCart";
import { Scroll } from "../components/Scroll";
import { Helmet } from "react-helmet";

const CountryAllCart = () => {

    const { id } = useParams();
    const idAsString = String(id);
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-10-server-red-seven.vercel.app/tourspot/country/${idAsString}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [idAsString])

    if (datas.length == 0) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    return (
        <div className='w-full max-w-[1440px] mx-auto px-5 min-h-[600px] flex items-center'>
            <Helmet>
                <title>{idAsString}</title>
            </Helmet>
            <Scroll></Scroll>
            <div className="my-5">
                <h1 className='text-4xl text-center font-semibold mb-10 capitalize title text-color'>most beautiful Tourist Spot on {idAsString}</h1>
                <div className="touristsSpot-container">
                    {
                        datas.map(data => <CountryCart key={data._id} data={data}></CountryCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CountryAllCart;