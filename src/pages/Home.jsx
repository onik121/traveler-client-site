import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import Cart from '../components/Cart';

const Home = () => {

    const touristsSpots = useLoaderData();

    return (
        <div>
            <div className="">
                <div className="max-w-[1440px] mx-auto px-5">
                    <Slider></Slider>
                </div>
                <div className='mt-10 mb-10 flex bg-[#f7f8fa]'>
                    <div className='touristsSpot-container max-w-[1440px] mx-auto px-5 pt-24 pb-24'>
                        {
                            touristsSpots.map(touristsSpot => <Cart key={touristsSpot.id} touristsSpot={touristsSpot}></Cart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;