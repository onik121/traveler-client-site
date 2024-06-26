import { useLoaderData } from "react-router-dom";
import AllspotCart from "../components/AllspotCart";
import { Scroll } from "../components/Scroll";
import { Helmet } from "react-helmet";

const AllSpot = () => {

    const tourspots = useLoaderData();

    return (
        <div className="w-full max-w-[1440px] mx-auto px-5 mt-5 mb-10">
            <Helmet>
                    <title>All Tour Spot</title>
                </Helmet>
            <Scroll></Scroll>
            <div>
                <h1 className='text-4xl text-center font-semibold mb-6 title text-color'>Explore all Tourist Spot Here</h1>
                <p className='text-center max-w-[720px] mx-auto mb-10 text-lg font-semibold sub-title text-color'>Immerse yourself in the allure of global travel, exploring countless iconic tourist spots right here.</p>
            </div>
            <div className="touristsSpot-container">
                {
                    tourspots.map(tourspot => <AllspotCart key={tourspot._id} tourspot={tourspot}></AllspotCart>)
                }
            </div>
        </div>
    );
};

export default AllSpot;