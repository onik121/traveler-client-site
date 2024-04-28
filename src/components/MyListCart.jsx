import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const MyListCart = ({ data }) => {

    const { image, seasonality, average_cost, travel_time, countryName, location, title, totalVisitorsPerYear, _id } = data;

    return (
        <div className="bg-white touristsSpot-cart rounded-3xl overflow-hidden min-h-[510px] h-fit">
            <img className="h-[280px] w-full" src={image}></img>
            <div className="p-5">
                <div className="flex items-center gap-6 mb-3 -ml-1">
                    <div className="flex items-center gap-1"><CiLocationOn className="text-xl" /><p>{countryName}, {location}</p></div>
                    <div className="flex items-center gap-2"><FaUserFriends className="text-xl" /><p>{totalVisitorsPerYear}</p></div>
                </div>
                <h3 className="text-xl text-black font-semibold">{title}</h3>
                <div className="line mt-4 mb-5"></div>
                <div className="flex items-center justify-between -ml-1">
                    <div className="flex items-center text-lg font-medium"><MdOutlineAttachMoney className="text-xl" /><p>{average_cost}</p></div>
                    <div className="flex items-center gap-1"><IoTimeOutline className="text-xl mt-[2px]" /><p className="capitalize">{travel_time}</p></div>
                </div>
                <div className="flex gap-5 mt-1">
                    <Link to={`/details/${_id}`}><button className="read-more mt-4">Read More</button></Link>
                    <Link to={`/update/${_id}`}><button className="read-more mt-4">Update</button></Link>
                    <Link to={`/details/${_id}`}><button className="read-more mt-4">Delate</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyListCart;