import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function CountrySlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <div className='slider-4 slider'>
                        <div className='overlay flex items-center justify-center'>
                            <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                                <h1 className='text-5xl title font-medium'>Discover Your Dream Home Today!</h1>
                                <p className='text-lg mt-5'>Sustainable residences with green design, eco-friendly materials, and energy-efficient technologies for a greener, more responsible lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-4 slider'>
                        <div className='overlay flex items-center justify-center'>
                            <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                                <h1 className='text-5xl title font-medium'>Discover Your Dream Home Today!</h1>
                                <p className='text-lg mt-5'>Sustainable residences with green design, eco-friendly materials, and energy-efficient technologies for a greener, more responsible lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-4 slider'>
                        <div className='overlay flex items-center justify-center'>
                            <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                                <h1 className='text-5xl title font-medium'>Discover Your Dream Home Today!</h1>
                                <p className='text-lg mt-5'>Sustainable residences with green design, eco-friendly materials, and energy-efficient technologies for a greener, more responsible lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-4 slider'>
                        <div className='overlay flex items-center justify-center'>
                            <div className='text-white text-center max-w-[700px] mx-auto slider-content'>
                                <h1 className='text-5xl title font-medium'>Discover Your Dream Home Today!</h1>
                                <p className='text-lg mt-5'>Sustainable residences with green design, eco-friendly materials, and energy-efficient technologies for a greener, more responsible lifestyle.</p>
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
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>
  );
}
