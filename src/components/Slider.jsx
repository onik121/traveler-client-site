

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
            <SwiperSlide>
                <div className='slider-1 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Your Journey to the Perfect Residence Starts Here</h1>
                            <p className='text-lg mt-5'>Stylish apartments with cutting-edge design, luxurious amenities, and prime city location for an elevated urban lifestyle experience.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-2 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Your Ultimate Guide to Residential Bliss</h1>
                            <p className='text-lg mt-5'>Peaceful residences amidst greenery offering sanctuary from city life while maintaining easy urban access.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-3 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Finding Serenity in Every Space</h1>
                            <p className='text-lg mt-5'>Charming seaside homes with ocean views, sandy beaches, and relaxed coastal living ambiance for ultimate tranquility.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider-4 slider'>
                    <div className='overlay flex items-center justify-center'>
                        <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                            <h1 className='text-5xl title'>Discover Your Dream Home Today!</h1>
                            <p className='text-lg mt-5'>Sustainable residences with green design, eco-friendly materials, and energy-efficient technologies for a greener, more responsible lifestyle.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;