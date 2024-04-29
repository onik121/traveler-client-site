import { useLoaderData } from "react-router-dom";
import AllspotCart from "../components/AllspotCart";


const AllSpot = () => {

    const tourspots = useLoaderData();

    return (
        <div className="touristsSpot-container w-full max-w-[1440px] mx-auto px-5 my-5">
            {
                tourspots.map(tourspot => <AllspotCart key={tourspot._id} tourspot={tourspot}></AllspotCart>)
            }
        </div>
    );
};

export default AllSpot;