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
                <div className="bg-2">
                    <div className='max-w-[1440px] px-5 mx-auto my-10 sm:my-20 py-10 sm:py-20'>
                        <h1 className='text-4xl text-center font-semibold mb-6 title text-color'>Top Destinations</h1>
                        <p className='text-center max-w-[700px] mx-auto mb-10 text-lg font-semibold sub-title text-color'>Discover our handpicked selection of the world&apos;s most captivating destinations. From iconic landmarks to hidden gems, embark on unforgettable adventures.</p>
                        <Countries></Countries>
                    </div>
                </div>
                <div className="max-w-[1440px] px-5 mx-auto mb-16 text-center">
                    <h1 className='text-4xl text-center font-semibold  mb-6 title text-color'>Explore The World Yourself</h1>
                    <p className='text-center max-w-[700px] mx-auto mb-10 text-lg font-semibold sub-title text-color'>Embark on your own adventures, discover new horizons, and create unforgettable memories around the globe.</p>
                    <img src={img}></img>
                </div>
                <div className='flex bg-2'>
                    <div className='max-w-[1440px] mx-auto px-5 py-10 sm:py-20 w-full'>
                        <div className='touristsSpot-container w-full'>
                            {
                                touristsSpots.slice(0, 6).map(touristsSpot => <Cart key={touristsSpot._id} touristsSpot={touristsSpot}></Cart>)
                            }
                        </div>
                    </div>
                </div>
                <div className='max-w-[1440px] mx-auto px-5 mt-12 mb-5 sm:mt-24 sm:mb-14'>
                    <GetUpdate></GetUpdate>
                </div>
            </div>
        </div>
    );
};

export default Home;