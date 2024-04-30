import Swal from 'sweetalert2'
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const MyListCart = ({ cartData, setData, datas }) => {

    const { average_cost, travel_time, countryName, location, totalVisitorsPerYear, _id, seasonality } = cartData;

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
                                title: "Deleted Sucessfully",
                                // text: "Your file has been deleted.",
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
        <div className="w-full">
            <div className="w-full touristsSpot-cart flex flex-wrap justify-around my-5 p-5 items-center tabular-form gap-5 text-color">
                <div className="flex gap-1">
                    <p className="font-medium">Country:</p>
                    <p className="capitalize">{countryName}</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-medium">Location:</p>
                    <p>{location}</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-medium">Travle Time:</p>
                    <p>{travel_time}</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-medium">Cost:</p>
                    <p>{average_cost}</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-medium">Visitor Per Year:</p>
                    <p>{totalVisitorsPerYear}</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-medium">Seasonality:</p>
                    <p className="capitalize">{seasonality}</p>
                </div>
                <div><Link to={`/update/${_id}`}><button className="read-more">Update</button></Link></div>
                <div><button className="read-more" onClick={() => handleDelete(_id)}>Delate</button></div>
            </div>
        </div>
    );
};

MyListCart.propTypes = {
    cartData: PropTypes,
    setData: PropTypes,
    datas: PropTypes,
}

export default MyListCart;