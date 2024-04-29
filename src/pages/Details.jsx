import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

const Details = () => {

    const data = useLoaderData();

    const { travel_time, location, average_cost, countryName, tourists_spot_name } = data;

    return (
        <div className="max-w-[1440px] mx-auto px-5 min-h-[600px] flex items-center">
            <div className="book-details-container flex items-center">
                <div className="book-details-img">
                    <div>
                        <img className="rounded-lg relative" src={data.image}></img>
                        <p className="bg-[#4482ff] text-white rounded-es-lg px-2 pb-[1px] absolute capitalize w-fit -mt-[25px] mr-0">{tourists_spot_name}</p>
                    </div>
                </div>
                <div className="book-details-text">
                    <h1 className="text-4xl text-black font-semibold">{data.title}</h1>
                    <h2 className="text-2xl font-medium my-5">{ }</h2>
                    <p className="mt-4 text-lg text-black">{data.description}</p>
                    <div className="Line"></div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2"><CiLocationOn className="text-xl" /><p>{countryName}, {location}</p></div>
                        <div className="flex items-center text-lg -ml-[3px] gap-[7px]"><MdOutlineAttachMoney className="text-[23px]" /><p>{average_cost}</p></div>
                        <div className="flex items-center gap-2"><IoTimeOutline className="text-xl mt-[2px]" /><p className="capitalize">{travel_time}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;