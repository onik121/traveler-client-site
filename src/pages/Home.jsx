import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import Cart from '../components/Cart';
import GetUpdate from '../components/GetUpdate';
import Countries from '../components/Countries';

const Home = () => {

    const touristsSpots = useLoaderData();
    // const [data, setData] = useState(6)

    return (
        <div>
            <div className="">
                <div className="max-w-[1440px] px-5 mx-auto">
                    <Slider></Slider>
                </div>
                <div className="max-w-[1440px] px-5 mx-auto my-20">
                    <h1 className='text-4xl text-center font-semibold text-black mb-10'>Top Destinations</h1>
                    <Countries></Countries>
                </div>
                <div className='flex bg-[#f7f8fa]'>
                    <div className='max-w-[1440px] mx-auto px-5 pt-24 pb-24 w-full'>
                        <div className='touristsSpot-container w-full'>
                            {
                                touristsSpots.slice(0, 6).map(touristsSpot => <Cart key={touristsSpot._id} touristsSpot={touristsSpot}></Cart>)
                            }
                        </div>
                    </div>
                </div>
                <div className='max-w-[1440px] mx-auto px-5 mt-24 mb-14'>
                    <GetUpdate></GetUpdate>
                </div>
            </div>
        </div>
    );
};

export default Home;