'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import { HiArrowRight } from 'react-icons/hi'

const cardData = [
  {
    title: 'Clich PR',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/48b77ee8-87f2-4cd5-891f-7b8627261521?apiKey=82fbeafba71b456098d689d87f195e0a&width=900',
  },
  {
    title: 'Quicken',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c7fde52-3869-4bb5-a231-4ce3dffd9f9f?apiKey=82fbeafba71b456098d689d87f195e0a&width=900',
  },
  {
    title: 'Clich PR',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/48b77ee8-87f2-4cd5-891f-7b8627261521?apiKey=82fbeafba71b456098d689d87f195e0a&width=900',
  },
  {
    title: 'Quicken',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c7fde52-3869-4bb5-a231-4ce3dffd9f9f?apiKey=82fbeafba71b456098d689d87f195e0a&width=900',
  },
  {
    title: 'Clich PR',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/48b77ee8-87f2-4cd5-891f-7b8627261521?apiKey=82fbeafba71b456098d689d87f195e0a&width=900',
  },
  {
    title: 'Quicken',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0c7fde52-3869-4bb5-a231-4ce3dffd9f9f?apiKey=82fbeafba71b456098d689d87f195e0a&width=900',
  },
];

interface CardProps {
  title: string;
  imageSrc: string;
}

const CardComponent: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative w-[30rem] h-[40rem] md:w-[30rem] lg:w-[40rem] overflow-hidden">
      <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex justify-between p-3 items-end bg-black bg-opacity-40 text-white">
        <h3 className="text-2xl md:text-4xl">{title}</h3>
        <button className="mt-2 px-4 py-2 text-white border flex items-center font-semibold hover:bg-[#e6e6e6] hover:text-slate-900">
          Know More
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default function Carousel() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="px-60 max-md:px-10">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1500}
        loop={true}
        loopAdditionalSlides={1}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <CardComponent title={card.title} imageSrc={card.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
