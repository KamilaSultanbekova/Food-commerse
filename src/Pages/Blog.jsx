import { BlogData } from "../Data/db";
import widget1 from "../assets/1298.png";
import widget2 from "../assets/1299.png";
import widget3 from "../assets/1300.png";
import widget4 from "../assets/1301.png";
export default function Blog() {
  return (
    <div className="px-40 py-10 container mx-auto flex gap-10 ">
      <div className="w-400">
        {BlogData.map((data) => (
          <div className=" my-3">
            <img className="w-200 rounded-xl" src={data.img} />
            <h1 className="text-4xl font-bold my-3">{data.name}</h1>
            <h1 className="text-gray-500 py-3">{data.date}</h1>
            <h1 className="text-gray-700 text-sm my-2">{data.desc}</h1>
            <button className="bg-[#634C9F] rounded-xl text-white py-3 px-4 my-3 hover:bg-[#3f3262] text-sm font-bold">
              Read More
            </button>
          </div>
        ))}
      </div>
      <div>
        <div>
          <h1 className="font-semibold my-3 text-xl">Blog Post List</h1>
          <div className="pt-2">
            {BlogData.map((data) => (
              <div className=" my-3 flex gap-4">
                <img className="w-20 h-20 rounded-full" src={data.img} />
                <div>
                  <h1 className="text-md font-bold">{data.name}</h1>
                  <h1 className="text-gray-500 py-3">{data.date}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold my-3 text-xl">Social Media Widget</h1>
          <div className="mt-4">
            <img className="my-2" src={widget2} />
            <img className="my-2" src={widget3} />
            <img className="my-2" src={widget4} />
            <img className="my-2" src={widget1} />
          </div>
        </div>
      </div>
    </div>
  );
}
