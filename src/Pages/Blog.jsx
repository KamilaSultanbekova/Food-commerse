import { BlogData } from "../Data/db";
import widget1 from "../assets/1298.png";
import widget2 from "../assets/1299.png";
import widget3 from "../assets/1300.png";
import widget4 from "../assets/1301.png";

export default function Blog() {
  return (
    <div className="container mx-auto sm:px-6 lg:px-20 py-10 md:px-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {BlogData.map((data) => (
            <div key={data._id} className="mb-8">
              <img
                className="w-full h-64 object-cover rounded-xl shadow-md"
                src={data.img}
                alt={data.name}
              />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
                {data.name}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base my-2">
                {data.date}
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {data.desc}
              </p>
              <button className="mt-4 bg-[#634C9F] hover:bg-[#3f3262] transition px-6 py-2 text-sm sm:text-base font-semibold rounded-xl text-white shadow">
                Read More
              </button>
            </div>
          ))}
        </div>

        <div>
          <div>
            <h1 className="font-semibold text-lg sm:text-xl mb-4">
              Blog Post List
            </h1>
            <div className="space-y-4">
              {BlogData.map((data) => (
                <div
                  key={data._id}
                  className="flex items-center gap-4 border-b border-gray-200 pb-4"
                >
                  <img
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                    src={data.img}
                    alt={data.name}
                  />
                  <div>
                    <h1 className="font-bold text-sm sm:text-base">
                      {data.name}
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {data.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h1 className="font-semibold text-lg sm:text-xl mb-4">
              Social Media Widget
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[widget2, widget3, widget4, widget1].map((icon, idx) => (
                <img
                  key={idx}
                  className="w-full h-16 sm:h-20 object-contain rounded-lg shadow-sm hover:scale-105 transition"
                  src={icon}
                  alt="social widget"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
