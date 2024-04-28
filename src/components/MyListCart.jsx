import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'; // ES6

const MyListCart = ({ cartData, setData, datas }) => {

    const { image, average_cost, travel_time, countryName, location, title, totalVisitorsPerYear, _id } = cartData;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-red-seven.vercel.app/tourspot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainig = datas.filter(cof => cof._id !== id)
                            setData(remainig);
                        }
                    })
            }
          });
    }


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
                    <button className="read-more mt-4" onClick={ () => handleDelete(_id)}>Delate</button>
                </div>
            </div>
        </div>
    );
};

MyListCart.propTypes = {
    cartData : PropTypes,
    setData: PropTypes,
    datas : PropTypes,
}

export default MyListCart;