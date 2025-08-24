import header from "../assets/Header.png";
import header2 from "../assets/Header2.svg";
import header3 from "../assets/Header3.jpg";
import Cookies from "./Cookies";

// Swiper Import kiya hai
import { Swiper, SwiperSlide } from "swiper/react";
//Pagination 3 dots hoty hain
//Autoplay means scroll Automatically hoga
//Keyboard means k keyboard keys sy bhi chaly ga
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Header() {
  return (
    <>
      <div className="w-full relative mt-[80px] bg-[rgba(252,248,237,1)]">
        {/* Slider for header images */}
        <Swiper
          modules={[Autoplay, Pagination, Keyboard]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          keyboard={{ enabled: true }} //Keyboard keys enable
          pagination={{ clickable: true }} //3 dots enable
          className="w-full "
        >
          <SwiperSlide>
            {/* Image 1 */}
            <img
              className="w-full h-full object-contain lg:object-cover xl:object-cover md:object-cover "
              src={header}
              alt="header1"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* Image 2 */}

            <img
              className="w-full h-full object-contain lg:object-cover xl:object-cover md:object-cover "
              src={header2}
              alt="header2"
            />
          </SwiperSlide>
          <SwiperSlide>
            {/* Image 3 */}

            <img
              className="w-full h-full object-contain lg:object-cover xl:object-cover md:object-cover "
              src={header3}
              alt="header3"
            />
          </SwiperSlide>
        </Swiper>

        <Cookies />

        {/* Text */}
        <div className="absolute inset-0 z-50 text-white drop-shadow-gray-500 drop-shadow-md flex flex-col justify-center lg:pl-20 lg:pb-20 xl:pl-20 xl:pb-20 md:pl-15 md:pb-15 pl-10 pb-10">
          <h1 className="lg:text-6xl xl:text-7xl 2xl:text-8xl md:text-5xl text-3xl lg:pb-4 md:pb-4">
            Scent for
          </h1>
          <h1 className="lg:text-6xl xl:text-7xl 2xl:text-8xl md:text-5xl text-3xl lg:pb-4 md:pb-4">
            Serenity
          </h1>
          <p className="lg:text-xl xl:text-xl 2xl:text-2xl md:text-lg text-md font-sansserif">
            A home away from home
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
