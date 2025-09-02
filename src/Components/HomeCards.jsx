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
  return (
    <div className="container mx-auto pt-10 px-4 sm:px-6 lg:px-40">
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 lg:gap-10 place-items-center">
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card1}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Fruits & Vegetables
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card2}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Baby & Pregnancy
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card3}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">Beverages</h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card4}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Meats & Seafood
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card5}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Biscuits & Snacks
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card6}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Breads & Bakery
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card7}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Breaksfast & Dairy
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card8}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Frozen Foods
          </h1>
        </div>
        <div className="text-center">
          <img
            className="bg-gray-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
            src={card9}
          />
          <h1 className="font-semibold text-xs sm:text-sm mt-2">
            Grocery & Staples
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-3">
        {BannerData.map((data) => (
          <div
            key={data._id}
            className="w-full h-[180px] sm:h-[200px] lg:h-[220px] rounded-md bg-center bg-cover mx-auto"
            style={{ backgroundImage: `url(${data.bg})` }}
          >
            <div className="pt-5 pl-5 pb-5">
              <h1 className="text-[#EA580C] my-1 text-sm sm:text-base">
                {data.tit}
              </h1>
              <h1 className="text-[#111827] font-bold text-lg sm:text-xl">
                {data.title1}
              </h1>
              <h1 className="text-[#111827] font-bold text-lg sm:text-xl">
                {data.title2}
              </h1>
              <h1 className="text-xs sm:text-sm text-gray-400 my-1">
                {data.desc}
              </h1>
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h1 className="font-bold text-lg sm:text-xl">New Arrivals </h1>
            <h1 className="text-xs sm:text-sm text-gray-400 sm:pt-1 sm:pl-3">
              Dont miss this opportunity at a special discount just for this
              week.
            </h1>
          </div>
          <button className="self-start sm:self-auto border border-gray-400 rounded-full py-1 px-3 text-sm font-semibold hover:bg-gray-200">
            <NavLink to="/filterbeverages">
              View All <ArrowRightAltIcon />{" "}
            </NavLink>{" "}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CardData.map((data) => {
            return (
              <div
                key={data._id}
                className="border border-gray-200 p-3 py-5 rounded-md h-full flex flex-col"
              >
                <img
                  src={data.img}
                  className="w-full h-32 sm:h-36 lg:h-40 object-contain"
                />
                <span className="bg-blue-200 rounded-full px-2 text-xs sm:text-sm font-semibold mt-2 w-fit">
                  {data.type}
                </span>
                <h1 className="font-semibold py-2 text-sm sm:text-base">
                  {data.title}
                </h1>
                <div className="flex items-baseline pt-2 gap-2">
                  <h1 className="text-lg sm:text-xl text-red-600 font-bold">
                    {data.price}
                  </h1>
                  <s className="font-semibold text-xs sm:text-sm">
                    {data.lastprice}
                  </s>
                </div>
                <NavLink to="/filterbeverages" className="mt-auto">
                  <button className="w-full text-[14px] text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 text-left hover:bg-gray-200">
                    <h1>See more</h1>
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-3">
          {BigBanners.map((data) => (
            <div
              key={data._id}
              className="w-full h-64 sm:h-72 lg:h-100 rounded-md bg-center bg-cover mx-auto"
              style={{ backgroundImage: `url(${data.bg})` }}
            >
              <div className="pt-5 pl-5 pb-5">
                <h1 className="text-[#EA580C] my-1 text-sm sm:text-base">
                  {data.time}
                </h1>
                <h1 className="text-[#111827] font-bold text-lg sm:text-xl">
                  {data.title1}
                </h1>
                <h1 className="text-[#111827] font-bold text-lg sm:text-xl">
                  {data.title2}
                </h1>
                <h1 className="text-xs sm:text-sm text-gray-400 my-1">
                  {data.desc}
                </h1>
                <NavLink to="filterfruits">
                  <button className="bg-white rounded-full py-2 px-3 border border-gray-400 mt-2 hover:bg-gray-200">
                    Shop Now <ArrowRightAltIcon />
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-7">
          {CardData2.map((data) => {
            return (
              <div
                key={data._id}
                className="border border-gray-200 p-3 py-5 rounded-md h-full flex flex-col"
              >
                <img
                  src={data.img}
                  className="w-full h-32 sm:h-36 lg:h-40 object-contain"
                />
                <h1 className="font-semibold py-2 text-sm sm:text-base">
                  {data.title1}
                </h1>
                <Rating
                  name={`rating-${data._id}`}
                  value={data.rating}
                  size="small"
                  readOnly
                />
                <div className="flex items-baseline pt-2 gap-2">
                  <h1 className="text-lg sm:text-xl text-red-600 font-bold">
                    {data.price}
                  </h1>
                  <s className="font-semibold text-xs sm:text-sm">
                    {data.lastprice}
                  </s>
                </div>
                <NavLink to="/filterbeverages" className="mt-auto">
                  <button className="w-full text-[14px] text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 text-left hover:bg-gray-200">
                    <h1> Add to cart</h1>
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          {BnTwo.map((data) => (
            <div
              key={data._id}
              className="w-full h-56 sm:h-64 lg:h-72 rounded-md bg-center bg-cover mx-auto"
              style={{ backgroundImage: `url(${data.bg})` }}
            >
              <div className="pt-10 pl-5 pb-10">
                <h1 className="text-[#EA580C] my-1 text-sm sm:text-base">
                  {data.time}
                </h1>
                <h1 className="text-[#111827] font-bold text-lg sm:text-xl">
                  {data.title1}
                </h1>
                <h1 className="text-[#111827] font-bold text-lg sm:text-xl">
                  {data.title2}
                </h1>
                <h1 className="text-xs sm:text-sm text-gray-400 my-1">
                  {data.desc}
                </h1>
                <button className="bg-white rounded-full py-2 px-3 border border-gray-400 mt-2 hover:bg-gray-200">
                  <NavLink to="/filterbeverages">
                    Shop Now <ArrowRightAltIcon />{" "}
                  </NavLink>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h1 className="font-bold text-lg sm:text-xl">Best Sellers</h1>
            <h1 className="text-xs sm:text-sm text-gray-400 sm:pt-1 sm:pl-3">
              Some of the new products arriving this weeks
            </h1>
          </div>
          <button className="self-start sm:self-auto border border-gray-400 rounded-full py-1 px-3 text-sm font-semibold hover:bg-gray-200">
            <NavLink to="/filterbeverages">
              Shop Now <ArrowRightAltIcon />{" "}
            </NavLink>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            {CardsThree.map((data) => {
              return (
                <div
                  key={data._id}
                  className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    className="w-32 mx-auto sm:w-28 lg:w-36"
                    src={data.img}
                    alt={data.title}
                  />

                  <div className="mt-3">
                    <span className="bg-blue-200 rounded-full px-2 py-0.5 text-xs sm:text-sm font-medium">
                      {data.type}
                    </span>
                    <h1 className="font-semibold mt-2 text-sm sm:text-base">
                      {data.title}
                    </h1>

                    <Rating
                      name={`rating-${data._id}`}
                      value={data.rating}
                      size="small"
                      readOnly
                    />

                    <div className="flex items-baseline gap-2 mt-2">
                      <h1 className="text-lg sm:text-xl text-red-600 font-bold">
                        {data.price}
                      </h1>
                      <s className="text-gray-500 text-xs sm:text-sm">
                        {data.lastprice}
                      </s>
                    </div>
                  </div>

                  <NavLink to="/filterbeverages">
                    <button className="w-full text-[14px] text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 text-left hover:bg-gray-200">
                      Add to cart
                    </button>
                  </NavLink>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {InnerBanner.map((data) => (
              <div
                key={data._id}
                className="rounded-lg bg-center bg-cover h-64 sm:h-72 lg:h-80 flex items-center"
                style={{ backgroundImage: `url(${data.bg})` }}
              >
                <div className="bg-white/70 p-4 rounded-md ml-5">
                  <h1 className="text-[#EA580C] text-xs sm:text-sm mb-1">
                    {data.time}
                  </h1>
                  <h2 className="text-[#111827] font-bold text-lg sm:text-xl">
                    {data.title1}
                  </h2>
                  <h2 className="text-[#111827] font-bold text-lg sm:text-xl">
                    {data.title2}
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {data.desc}
                  </p>
                  <NavLink to="/filterfruits">
                    <button className="mt-3 bg-white rounded-full py-2 px-4 border border-gray-400 hover:bg-gray-100 transition">
                      Shop Now <ArrowRightAltIcon className="inline-block" />
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {CardsFour.map((data) => {
              return (
                <div
                  key={data._id}
                  className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    className="w-32 mx-auto sm:w-28 lg:w-36"
                    src={data.img}
                    alt={data.title}
                  />

                  <div className="mt-3">
                    <h1 className="font-semibold text-sm sm:text-base">
                      {data.title}
                    </h1>
                    <Rating
                      name={`rating-${data._id}`}
                      value={data.rating}
                      size="small"
                      readOnly
                    />

                    <div className="flex items-baseline gap-2 mt-2">
                      <h1 className="text-lg sm:text-xl text-red-600 font-bold">
                        {data.price}
                      </h1>
                      <s className="text-gray-500 text-xs sm:text-sm">
                        {data.lastprice}
                      </s>
                    </div>
                  </div>

                  <NavLink to="/filterfruits">
                    <button className="w-full text-[14px] text-gray-500 mt-3 border border-gray-500 rounded-full font-semibold pl-5 py-2 text-left hover:bg-gray-200">
                      Add to cart
                    </button>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-10">
          <img
            src={LastCard}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
