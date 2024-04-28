import { useContext, useEffect, useState } from "react";
import { AuthContentx } from "../provider/AuthProvider";
import MyListCart from "../components/MyListCart";

const MyList = () => {

    const { user } = useContext(AuthContentx);
    const [datas ,setData] = useState([]);

    useEffect( () => {
        fetch(`https://assignment-10-server-red-seven.vercel.app/tourspot/email/${user?.email}`)
        .then(res => res.json())
        .then(data => setData(data));
    } ,[user])

    // console.log(datas)

    return (
        <div className='touristsSpot-container w-full max-w-[1440px] mx-auto px-5 min-h-[600px] flex items-center'>
            {
                datas.map(data => <MyListCart key={data._id} data={data}></MyListCart>)
            }
        </div>
    );
};

export default MyList;