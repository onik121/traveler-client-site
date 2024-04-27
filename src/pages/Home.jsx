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
                <div className='mt-10 mb-10 flex bg-[#f7f8fa]'>
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