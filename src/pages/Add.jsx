// import { useContext } from 'react';
import toast from 'react-hot-toast';
// import { AuthContentx } from '../provider/AuthProvider';


const Add = () => {

    // const { user } = useContext(AuthContentx);

    const hanldeAddTourspot = e => {
        e.preventDefault();
        const form = e.target;
        const countryName = form.countryname.value;
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
        const email = form.email.value;
        // const userEmail = user.email;
        const data = {countryName, title, average_cost, description, location, tourists_spot_name, image, seasonality, travel_time, totalVisitorsPerYear, username, email}
        // console.log(user.email);
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
            <h1 className="text-center text-3xl text-black font-medium">You can add your favourite Tourists here</h1>
            <div className="add-tourists-spot mt-8 max-w-[1000px] mx-auto">
                <form className="space-y-4" onSubmit={hanldeAddTourspot}>
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <label>Country Name</label>
                            <input className="w-full mt-2" type="text" name="countryname"/>
                        </div>
                        <div className="w-1/2">
                            <label>Title</label>
                            <input className="w-full mt-2" type="text" name="title"/>
                        </div>
                        <div className="w-1/2">
                            <label>Cost</label>
                            <input className="w-full mt-2" type="text" name="cost"/>
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea className="mt-2" name="description"></textarea>
                        {/* <input className="w-full mt-2 des" type="text" name="description"/> */}
                    </div>
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <label>Location</label>
                            <input className="w-full mt-2" type="text" name="location"/>
                        </div>
                        <div className="w-1/2">
                            <label>Spot Name</label>
                            <input className="w-full mt-2" type="text" name="spotname"/>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <label>Image Url</label>
                            <input className="w-full mt-2" type="text" name="imageurl"/>
                        </div>
                        <div className="w-1/2">
                            <label>Seasonality</label>
                            <input className="w-full mt-2" type="text" name="seasonality"/>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <label>Travle Time</label>
                            <input className="w-full mt-2" type="text" name="travletime"/>
                        </div>
                        <div className="w-1/2">
                            <label>Visitors Per Year</label>
                            <input className="w-full mt-2" type="text" name="visitorperyear"/>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-1/2">
                            <label>User Name</label>
                            <input className="w-full mt-2" type="text" name="username"/>
                        </div>
                        <div className="w-1/2">
                            <label>Your Email</label>
                            <input className="w-full mt-2" type="email" name="email"/>
                        </div>
                    </div>
                    <button className="Btn w-full">Add</button>
                </form>
            </div>
        </div>
    );
};

export default Add;