import { useContext, useEffect, useState } from "react";
import { AuthContentx } from "../provider/AuthProvider";
import MyListCart from "../components/MyListCart";
import cart from '../assets/add-to-cart.png'
import { Link } from "react-router-dom";

const MyList = () => {

    const { user } = useContext(AuthContentx);
    const [datas, setData] = useState([]);

    console.log(datas)

    useEffect(() => {
        fetch(`https://assignment-10-server-red-seven.vercel.app/tourspot/email/${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [user])

    if (datas.length === 0) {
        return <div className='w-full max-w-[1440px] mx-auto px-5 min-h-[600px] flex items-center justify-center text-center'>
            <div className="">
                <img className="w-[80px] mx-auto" src={cart}></img>
                <h1 className="text-2xl mt-5 mb-7 capitalize max-w-[400px]">add your favourite tour place where you want to visit</h1>
                <Link className="go-back" to={'/addtouristspot'}>Add</Link>
            </div>
        </div>
    }

    return (
        <div className='w-full max-w-[1440px] mx-auto px-5 min-h-[600px] flex items-center'>
            <div className="touristsSpot-container">
                {
                    datas.map(cartData => <MyListCart key={cartData._id} cartData={cartData} datas={datas} setData={setData}></MyListCart>)
                }
            </div>
        </div>
    );
};

export default MyList;