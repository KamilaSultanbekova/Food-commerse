import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselData } from "../Data/db";

export default function HomeCarusel() {
  return (
    <div className="mt-3">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="overflow-hidden shadow-lg"
      >
        {CarouselData.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              className="
                h-[250px] sm:h-[350px] lg:h-[500px] 
                bg-center bg-cover mx-auto flex items-center
              "
              style={{ backgroundImage: `url(${data.bgimage})` }}
            >
              <div className="px-4 sm:px-10 lg:ml-40 lg:pt-28">
                <span className="text-xs sm:text-sm lg:text-base text-[#166534] font-semibold bg-gradient-to-r from-[#5f8c70] to-transparent px-2 py-1 rounded-sm">
                  {data.title}
                </span>

                <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-[#39245F] max-w-[90%] sm:max-w-[70%] lg:w-120 pt-2 sm:pt-3">
                  {data.maintitle}
                </h1>

                <h1 className="text-sm sm:text-base lg:text-lg text-[#030712] max-w-[90%] sm:max-w-[70%] lg:w-120 pt-2 sm:pt-3">
                  {data.desc}
                </h1>

                <div className="flex flex-col sm:flex-row mt-3 gap-3 sm:gap-4">
                  <button className="bg-[#634C9F] px-3 py-2 rounded-xl sm:rounded-2xl w-fit text-white text-sm sm:text-base">
                    Shop Now
                  </button>

                  <div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl text-red-600 font-bold">
                      $21.67{" "}
                      <s className="text-black text-sm sm:text-base lg:text-xl font-semibold">
                        {data.lastprice}
                      </s>
                    </h1>
                    <h1 className="text-xs sm:text-sm text-gray-600">
                      Don't miss this limited time offer.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
