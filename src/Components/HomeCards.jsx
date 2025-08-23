import card1 from "../assets/list02.png";
import card2 from "../assets/list05.png";
import card3 from "../assets/list08.png";
import card4 from "../assets/list11.png";
import card5 from "../assets/list14.png";
import card6 from "../assets/list17.png";
import card7 from "../assets/list20.png";
import card8 from "../assets/list23.png";
import card9 from "../assets/list26.png";
import LastCard from "../assets/97.png";
import {
  BannerData,
  CardData,
  BigBanners,
  BnTwo,
  CardData2,
  CardsThree,
  InnerBanner,
  CardsFour,
} from "../Data/db";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
export default function HomeCards() {
  const getKey = (p) => p?._id ?? p?.id;
  return (
    <div className="px-40 pt-10 container mx-auto ">
      <div className="flex justify-between gap-10">
        <div>
          <img className="bg-gray-200 rounded-full" src={card1} />
          <h1 className="font-semibold text-sm">Fruits & Vegetables</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card2} />
          <h1 className="font-semibold text-sm">Baby & Pregnancy</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card3} />
          <h1 className="font-semibold text-sm">Beverages</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card4} />
          <h1 className="font-semibold text-sm">Meats & Seafood</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card5} />
          <h1 className="font-semibold text-sm">Biscuits & Snacks</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card6} />
          <h1 className="font-semibold text-sm">Breads & Bakery</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card7} />
          <h1 className="font-semibold text-sm">Breaksfast & Dairy</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card8} />
          <h1 className="font-semibold text-sm">Frozen Foods</h1>
        </div>
        <div>
          <img className="bg-gray-200 rounded-full" src={card9} />
          <h1 className="font-semibold text-sm">Grocery & Staples</h1>
        </div>
      </div>
      <div className="flex my-10 gap-1">
        {BannerData.map((data) => (
          <div
            key={data._id}
            className=" w-full bg-center bg-cover mx-auto "
            style={{ backgroundImage: `url(${data.bg})` }}
          >
            <div className="pt-5 pl-5 pb-5">
              <h1 className="text-[#EA580C] my-1">{data.tit}</h1>
              <h1 className="text-[#111827] font-bold text-xl">
                {data.title1}
              </h1>
              <h1 className="text-[#111827] font-bold text-xl">
                {data.title2}
              </h1>
              <h1 className="text-sm text-gray-400 my-1">{data.desc}</h1>
              <button className="bg-white rounded-full py-2 px-3 border border-gray-400 mt-2 hover:bg-gray-200">
                <NavLink to="/filterfruits">
                  Shop Now <ArrowRightAltIcon />{" "}
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <div className="flex">
            <h1 className="font-bold text-xl">New Arrivals </h1>
            <h1 className="text-sm text-gray-400 pt-1 pl-3">
              Dont miss this opportunity at a special discount just for this
              week.
            </h1>
          </div>
          <button className="border border-gray-400 rounded-full py-1 px-3 text-sm font-semibold hover:bg-gray-200">
            <NavLink to="/filterbeverages">
              View All <ArrowRightAltIcon />{" "}
            </NavLink>{" "}
          </button>
        </div>
        <div className="flex gap-5">
          {CardData.map((data) => {
            const key = getKey(data);

            return (
              <div
                key={key}
                className=" border border-gray-200 p-3 py-5 rounded-md"
              >
                <img src={data.img} />
                <span className="bg-blue-200 rounded-full px-2 text-sm font-semibold">
                  {data.type}
                </span>
                <h1 className="font-semibold py-2">{data.title}</h1>
                <div className="flex pt-2">
                  <h1 className="text-xl text-red-600 font-bold">
                    {data.price}
                  </h1>
                  <s className="font-semibold text-sm pl-1  ">
                    {data.lastprice}
                  </s>
                </div>
                <NavLink to="/filterbeverages">
                  <button className="text-sm text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 pr-23 text-left hover:bg-gray-200">
                    <h1> Add to cart</h1>
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="flex mt-4 gap-2">
          {BigBanners.map((data) => (
            <div
              key={data._id}
              className=" w-full h-100 rounded-md bg-center bg-cover mx-auto"
              style={{ backgroundImage: `url(${data.bg})` }}
            >
              <div className="pt-5 pl-5 pb-5">
                <h1 className="text-[#EA580C] my-1">{data.time}</h1>
                <h1 className="text-[#111827] font-bold text-xl">
                  {data.title1}
                </h1>
                <h1 className="text-[#111827] font-bold text-xl">
                  {data.title2}
                </h1>
                <h1 className="text-sm text-gray-400 my-1">{data.desc}</h1>
                <NavLink to="filterfruits">
                  <button className="bg-white rounded-full py-2 px-3 border border-gray-400 mt-2 hover:bg-gray-200">
                    Shop Now <ArrowRightAltIcon />
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-7">
          {CardData2.map((data) => {
            const key = getKey(data);

            return (
              <div
                key={key}
                className=" border border-gray-200 p-3 py-5 rounded-md"
              >
                <img src={data.img} />
                <h1 className="font-semibold py-2">{data.title1}</h1>
                <Rating
                  name={`rating-${key}`}
                  value={data.rating}
                  size="small"
                  readOnly
                />
                <div className="flex pt-2">
                  <h1 className="text-xl text-red-600 font-bold">
                    {data.price}
                  </h1>
                  <s className="font-semibold text-sm pl-1  ">
                    {data.lastprice}
                  </s>
                </div>
                <NavLink to="/filterbeverages">
                  <button className="w-full text-[14px] text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2  text-left hover:bg-gray-200">
                    <h1> Add to cart</h1>
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {BnTwo.map((data) => (
            <div
              key={data._id}
              className=" w-full rounded-md bg-center bg-cover mx-auto"
              style={{ backgroundImage: `url(${data.bg})` }}
            >
              <div className="pt-10 pl-5 pb-10">
                <h1 className="text-[#EA580C] my-1">{data.time}</h1>
                <h1 className="text-[#111827] font-bold text-xl">
                  {data.title1}
                </h1>
                <h1 className="text-[#111827] font-bold text-xl">
                  {data.title2}
                </h1>
                <h1 className="text-sm text-gray-400 my-1">{data.desc}</h1>
                <button className="bg-white rounded-full py-2 px-3 border border-gray-400 mt-2 hover:bg-gray-200">
                  <NavLink to="/filterbeverages">
                    Shop Now <ArrowRightAltIcon />{" "}
                  </NavLink>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex">
            <h1 className="font-bold text-xl">Best Sellers</h1>
            <h1 className="text-sm text-gray-400 pt-1 pl-3">
              Some of the new products arriving this weeks
            </h1>
          </div>
          <button className="border border-gray-400 rounded-full py-1 px-3 text-sm font-semibold hover:bg-gray-200">
            <NavLink to="/filterbeverages">
              Shop Now <ArrowRightAltIcon />{" "}
            </NavLink>
          </button>
        </div>
        <div className="flex mt-4">
          <div className="grid grid-cols-2">
            {CardsThree.map((data) => {
              const key = getKey(data._id);
              return (
                <div
                  key={key}
                  className=" border border-gray-200 p-1 py-2 rounded-md w-50"
                >
                  <img className="w-40 items-center" src={data.img} />
                  <div className="ml-2">
                    <span className="bg-blue-200 rounded-full px-2 text-sm font-semibold">
                      {data.type}
                    </span>
                    <h1 className="font-semibold py-2">{data.title}</h1>
                    <Rating
                      name={`rating-${data._id}`}
                      value={data.rating}
                      size="small"
                      readOnly
                    />
                    <div className="flex pt-2">
                      <h1 className="text-xl text-red-600 font-bold">
                        {data.price}
                      </h1>
                      <s className="font-semibold text-sm pl-1  ">
                        {data.lastprice}
                      </s>
                    </div>
                  </div>
                  <NavLink to="filterbeverages">
                    <button className="text-sm text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 pr-23 text-left hover:bg-gray-200">
                      <h1> Add to cart</h1>
                    </button>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1">
            {InnerBanner.map((data) => {
              return (
                <div
                  key={data._id}
                  className=" rounded-md bg-center bg-cover mx-auto w-100"
                  style={{ backgroundImage: `url(${data.bg})` }}
                >
                  <div className="pt-10 pl-5 pb-10">
                    <h1 className="text-[#EA580C] my-1">{data.time}</h1>
                    <h1 className="text-[#111827] font-bold text-xl">
                      {data.title1}
                    </h1>
                    <h1 className="text-[#111827] font-bold text-xl">
                      {data.title2}
                    </h1>
                    <h1 className="text-sm text-gray-400 my-1">{data.desc}</h1>
                    <button className="bg-white rounded-full py-2 px-3 border border-gray-300 mt-2 hover:bg-gray-200">
                      <NavLink to="/filterfruits">
                        Shop Now <ArrowRightAltIcon />{" "}
                      </NavLink>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2">
            {CardsFour.map((data) => {
              const key = getKey(data._id);
              return (
                <div
                  key={key}
                  className=" border border-gray-200 p-1 py-2 rounded-md w-50"
                >
                  <img className="w-40" src={data.img} />
                  <div className="ml-2 mt-5">
                    <h1 className="font-semibold py-2">{data.title}</h1>
                    <Rating
                      name={`rating-${data._id}`}
                      value={data.rating}
                      size="small"
                      readOnly
                    />
                    <div className="flex pt-2">
                      <h1 className="text-xl text-red-600 font-bold">
                        {data.price}
                      </h1>
                      <s className="font-semibold text-sm pl-1">
                        {data.lastprice}
                      </s>
                    </div>
                  </div>
                  <NavLink to="/filterfruits">
                    <button className="text-sm text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 pr-23 text-left hover:bg-gray-200">
                      <h1> Add to cart</h1>
                    </button>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-10">
          <img src={LastCard} />
        </div>
      </div>
    </div>
  );
}
