import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import Cart from '../components/Cart';
import GetUpdate from '../components/GetUpdate';
import Countries from '../components/Countries';
import img from '../assets/h1-img-1.png'

const Home = () => {

    const touristsSpots = useLoaderData();

    return (
        <div>
            <div className="">
                <div className="max-w-[1440px] px-5 mx-auto">
                    <Slider></Slider>
                </div>
                <div className="bg-[#f7f8fa]">
                    <div className='max-w-[1440px] px-5 mx-auto my-20 py-20'>
                        <h1 className='text-4xl text-center font-semibold text-black mb-10'>Top Destinations</h1>
                        <Countries></Countries>
                    </div>
                </div>
                <div className="max-w-[1440px] px-5 mx-auto mb-16 text-center">
                    <h1 className='text-4xl text-center font-semibold text-black mb-14'>Explore The World Yourself</h1>
                    <img src={img}></img>
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