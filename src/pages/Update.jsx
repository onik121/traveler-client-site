

const Update = () => {
    return (
        <div className="max-w-[1440px] min-h-[600px] mx-auto px-5 my-5">
            <h1 className="text-center text-3xl text-black font-medium">You can Update your Tourspot here</h1>
            <div className="add-tourists-spot mt-8 max-w-[1000px] mx-auto">
                <form className="space-y-4">
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

export default Update;