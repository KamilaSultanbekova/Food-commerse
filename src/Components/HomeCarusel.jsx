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
            <div>
                <div className="h-[500px] bg-center bg-cover mx-auto"
                     style={{ backgroundImage: `url(${data.bgimage})` }}>
                    <div className="ml-40 pt-27">
                      <span  className="text-[#166534] font-semibold bg-linear-to-r from-[#5f8c70] to-transparent px-2 py-1 rounded-sm">{data.title}</span>
                    <h1 className="text-[#39245F] text-5xl font-bold w-120 pt-3 ">{data.maintitle}</h1>
                    <h1 className="text-[#030712] w-120 pt-3">{data.desc}</h1>
                    <div className="flex mt-3 gap-4">
                      <button className="bg-[#634C9F] px-3 rounded-2xl w-30 text-white">
                        Shop Now
                      </button>
                      <div>
                         <h1 className="text-red-600 text-2xl font-bold"> $21.67 <s className="text-black text-xl font-semibold">{data.lastprice}</s></h1>
                          <h1 className="text-sm text-gray-600">Don't miss this limited time offer.</h1>
                      </div>
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
