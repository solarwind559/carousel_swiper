import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import './styles.css';

import Penguins from './ImgContent/Images/Image1.jpg';
import Penguins1 from './ImgContent/Images/Image2.jpg';
import Penguins2 from './ImgContent/Images/Image3.jpg';
import Penguins3 from './ImgContent/Images/Image4.jpg';

SwiperCore.use ([Navigation, Pagination, Scrollbar]);

function App() {

  const imgData = [
    {title: "Buddies and pals", img: Penguins2},
    {title: "More buddies and pals", img: Penguins1},
    {title: "Even more buddies and pals", img: Penguins},
    {title: "Kiddos", img: Penguins3},
  ]

  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }} //test it!
    scrollbar={{ draggable: true }} //test it!
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >

{imgData.map( PenguinImg => (
  <SwiperSlide key={PenguinImg.img} className="slide">
    <div className="swipe-content">
      <div className="images">
        <img src={PenguinImg.img} alt=""/>        
      </div>
      <div className="text-area">
        {PenguinImg.title}
      </div>
    </div>
  </SwiperSlide>
))}

  </Swiper>
  )
}

export default App;
