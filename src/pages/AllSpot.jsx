import { useLoaderData } from "react-router-dom";
import AllspotCart from "../components/AllspotCart";
import { Scroll } from "../components/Scroll";


const AllSpot = () => {

    const tourspots = useLoaderData();

    return (
        <div className="touristsSpot-container w-full max-w-[1440px] mx-auto px-5 my-5">
            <Scroll></Scroll>
            {
                tourspots.map(tourspot => <AllspotCart key={tourspot._id} tourspot={tourspot}></AllspotCart>)
            }
        </div>
    );
};

export default AllSpot;