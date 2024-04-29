import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContentx } from '../provider/AuthProvider';
import { Scroll } from '../components/Scroll';


const Add = () => {

    const { user } = useContext(AuthContentx);

    const hanldeAddTourspot = e => {
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
        const username = form.username.value;
        const email = user.email;
        const data = {countryName, title, average_cost, description, location, tourists_spot_name, image, seasonality, travel_time, totalVisitorsPerYear, username, email}
        fetch('https://assignment-10-server-red-seven.vercel.app/tourspot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                if (data.insertedId) {
                    toast.success('Successfully Added')
                }
            })
    }


    return (
        <div className="max-w-[1440px] min-h-[600px] mx-auto px-5 my-5">
            <Scroll></Scroll>
            <h1 className="text-center text-3xl text-black font-medium capitalize">You can add your favourite Tourist Spot here</h1>
            <div className="add-tourists-spot mt-8 max-w-[1000px] mx-auto">
                <form className="space-y-4" onSubmit={hanldeAddTourspot}>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className='sm:w-[32%] w-full'>
                            <label>Country Name</label>
                            <input className="w-full mt-2" type="text" name="countryname" required/>
                        </div>
                        <div className='sm:w-[32%] w-full'>
                            <label>Title</label>
                            <input className="w-full mt-2" type="text" name="title" required/>
                        </div>
                        <div className='sm:w-[32%] w-full'>
                            <label>Cost</label>
                            <input className="w-full mt-2" type="text" name="cost" required/>
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea className="mt-2" name="description" required></textarea>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>Location</label>
                            <input className="w-full mt-2" type="text" name="location" required/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Spot Name</label>
                            <input className="w-full mt-2" type="text" name="spotname" required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>Image Url</label>
                            <input className="w-full mt-2" type="text" name="imageurl" required/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Seasonality</label>
                            <input className="w-full mt-2" type="text" name="seasonality" required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>Travle Time</label>
                            <input className="w-full mt-2" type="text" name="travletime" required/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Visitors Per Year</label>
                            <input className="w-full mt-2" type="text" name="visitorperyear" required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between space-y-3 sm:space-y-0">
                        <div className="w-full sm:w-[48.7%]">
                            <label>User Name</label>
                            <input className="w-full mt-2" type="text" name="username" required/>
                        </div>
                        <div className="w-full sm:w-[48.7%]">
                            <label>Your Email</label>
                            <input className="w-full mt-2" type="email" name="email" required/>
                        </div>
                    </div>
                    <button className="Btn w-full">Add</button>
                </form>
            </div>
        </div>
    );
};

export default Add;