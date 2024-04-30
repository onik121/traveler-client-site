import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const Cart = ({ touristsSpot }) => {

    const { image, average_cost, travel_time, countryName, location, title, totalVisitorsPerYear, _id } = touristsSpot;

    return (
        <div className="rounded-3xl overflow-hidden sm:min-h-[450px] shado">
            <img className="w-full tourspots-img" src={image}></img>
            <div className="p-5">
                <div className="flex items-center gap-6 mb-3 -ml-1">
                    <div className="flex items-center gap-1"><CiLocationOn className="text-xl text-color" /><p className="capitalize text-color">{countryName}, {location}</p></div>
                    <div className="flex items-center gap-2"><FaUserFriends className="text-xl text-color" /><p className="text-color">{totalVisitorsPerYear}</p></div>
                </div>
                <h3 className="text-xl font-semibold text-color">{title}</h3>
                <div className="line mt-4 mb-5"></div>
                <div className="flex items-center justify-between  -ml-1">
                    <div className="flex items-center text-lg font-medium"><MdOutlineAttachMoney className="text-xl text-color" /><p className="text-color">{average_cost}</p></div>
                    <div className="flex items-center gap-1"><IoTimeOutline className="text-xl mt-[2px] text-color" /><p className="capitalize text-color">{travel_time}</p></div>
                </div>
                <Link to={`/details/${_id}`}><button className="read-more mt-4">Read More</button></Link>
            </div>
        </div>
    );
};

Cart.propTypes = {
    touristsSpot: PropTypes,
}

export default Cart;