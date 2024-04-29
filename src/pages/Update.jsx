import { useLoaderData, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import { Scroll } from "../components/Scroll";

const Update = () => {

    const tourspots = useLoaderData();
    console.log(tourspots)
    const { _id } = tourspots;
    const { travel_time, location, average_cost, countryName, tourists_spot_name, title, description, image, seasonality, totalVisitorsPerYear } = tourspots;
    const navigate = useNavigate();

    const handleUpdateCoffe = e => {
        e.preventDefault();
        const form = e.target;
        let countryName = form.countryname.value.toLowerCase();
        const title = form.title.value;
        const average_cost = form.cost.value;
        const description = form.description.value;
        const location = form.location.value;
        const tourists_spot_name = form.spotname.value;
        const image = form.imageurl.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travletime.value;
        const totalVisitorsPerYear = form.visitorperyear.value;
        const data = { countryName, title, average_cost, description, location, tourists_spot_name, image, seasonality, travel_time, totalVisitorsPerYear }
        console.log(data)
        fetch(`https://assignment-10-server-red-seven.vercel.app/tourspot/id/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Update Successfull')
                    navigate('/mylist')
                    form.reset();
                }
            })
    }

    return (
        <div className="max-w-[1440px] min-h-[600px] mx-auto px-5 my-5">
            <Scroll></Scroll>
            <h1 className="text-center text-3xl text-black font-medium capitalize">You can Update your Tourist Spot here</h1>
            <div className="add-tourists-spot mt-8 max-w-[1000px] mx-auto">
                <form className="space-y-4" onSubmit={handleUpdateCoffe}>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className='sm:w-[32%] w-full'>
                            <label>Country Name</label>
                            <input className="w-full mt-2" type="text" name="countryname" defaultValue={countryName}/>
                        </div>
                        <div className='sm:w-[32%] w-full'>
                            <label>Title</label>
                            <input className="w-full mt-2" type="text" name="title" defaultValue={title}/>
                        </div>
                        <div className='sm:w-[32%] w-full'>
                            <label>Cost</label>
                            <input className="w-full mt-2" type="text" name="cost" defaultValue={average_cost}/>
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea className="mt-2" name="description" defaultValue={description}></textarea>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>Location</label>
                            <input className="w-full mt-2" type="text" name="location" defaultValue={location}/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Spot Name</label>
                            <input className="w-full mt-2" type="text" name="spotname" defaultValue={tourists_spot_name}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>Image Url</label>
                            <input className="w-full mt-2" type="text" name="imageurl" defaultValue={image}/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Seasonality</label>
                            <input className="w-full mt-2" type="text" name="seasonality" defaultValue={seasonality}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>Travle Time</label>
                            <input className="w-full mt-2" type="text" name="travletime" defaultValue={travel_time}/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Visitors Per Year</label>
                            <input className="w-full mt-2" type="text" name="visitorperyear" defaultValue={totalVisitorsPerYear}/>
                        </div>
                    </div>
                    <button className="Btn w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;