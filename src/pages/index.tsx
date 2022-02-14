import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import styles from '../styles/Home.module.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.mainBanner}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.bannerImage} style={{ backgroundImage: 'url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/142329-i413SzLmToZN.jpg)' }}>
            <h1>
              Demon Slayer: Kimetsu no Yaiba
            </h1>

            <div className={styles.wrapperInfos}>
              <span>97%</span>
              <span>Action</span>
              <span>2022</span>
            </div>

            <div className={styles.wrapperButton}>
              <button >
                Watch Trailer
              </button>

              <button>
                Details
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
