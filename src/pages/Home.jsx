import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import Cart from '../components/Cart';
// import { useState } from 'react';

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
                    <div className='flex justify-around flex-wrap gap-5'>
                        <div className='text-center'>
                            <div className='w-[200px] h-[200px] rounded-full bg-red-100 overflow-hidden country country-1'></div>
                            <h4 className='mt-4 text-xl text-black font-medium'>Bangladesh</h4>
                        </div>
                        <div className='text-center'>
                            <div className='w-[200px] h-[200px] rounded-full bg-red-100 overflow-hidden country country-2'></div>
                            <h4 className='mt-4 text-xl text-black font-medium'>Thailand</h4>
                        </div>
                        <div className='text-center'>
                            <div className='w-[200px] h-[200px] rounded-full bg-red-100 overflow-hidden country country-3'></div>
                            <h4 className='mt-4 text-xl text-black font-medium'>Indonesia</h4>
                        </div>
                        <div className='text-center'>
                            <div className='w-[200px] h-[200px] rounded-full bg-red-100 overflow-hidden country country-4'></div>
                            <h4 className='mt-4 text-xl text-black font-medium'>Malaysia</h4>
                        </div>
                        <div className='text-center'>
                            <div className='w-[200px] h-[200px] rounded-full bg-red-100 overflow-hidden country country-5'></div>
                            <h4 className='mt-4 text-xl text-black font-medium'>Vietnam</h4>
                        </div>
                        <div className='text-center'>
                            <div className='w-[200px] h-[200px] rounded-full bg-red-100 overflow-hidden country country-6'></div>
                            <h4 className='mt-4 text-xl text-black font-medium'>Cambodia</h4>
                        </div>
                    </div>
                </div>
                <div className='mb-10 flex bg-[#f7f8fa]'>
                    <div className='max-w-[1440px] mx-auto px-5 pt-24 pb-24 w-full'>
                        <div className='touristsSpot-container w-full'>
                            {
                                touristsSpots.slice(0, 6).map(touristsSpot => <Cart key={touristsSpot.id} touristsSpot={touristsSpot}></Cart>)
                            }
                        </div>
                        {/* <div className={data === touristsSpots.length ? 'hidden' : 'text-center'}>
                            <button className="view mt-8" onClick={() => setData(touristsSpots.length)}>View all Properties</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;