import React from 'react';
import Slider from 'react-slick';

const BannerHome = () => {
  const images = [
    'https://img.vietcetera.com/wp-content/uploads/2020/03/fe.jpg',
    'https://www.craftlabs.sg/wp-content/uploads/2023/05/sneaker-banner-1-1.jpg',
    'https://static.sneakerjagers.com/news/nl/2021/11/LandingPage_Banners_Sneaker-1440x416-1-1024x296.jpg',
  ];

  return (
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
    >
      {images.map((image, index) => (
       <div>
         <div
          key={index}
          className="relative bg-cover bg-center bg-no-repeat pt-10 "
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-96 lg:items-center lg:px-48 lg:justify-end">
            <div className="max-w-5xl text-center">
              <div className="text-4xl font-bold leading-6 text-gray-800">
                SneakerStore Đường Tới Đam Mê
              </div>
              <div className="mt-5 mb-5 text-sm leading-6 text-gray-600">
                Đi Để Đẹp
              </div>
              <button className="text-center mt-8 bg-teal-500 w-36 h-12 rounded-md animate-bounce">
                <p className="text-white font-bold text-sm">Mua Ngay</p>
              </button>
            </div>
          </div>
        </div>
       </div>
      ))}
    </Slider>
  );
};

export default BannerHome;