import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PriceFilter from "../Components/FilterSideBartwo";
import bgimg from "../assets/banner-33.jpg.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import { toggleLike } from "../Slice/favoritesSlice";
import { toggleCart } from "../Slice/cartSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { addNewProductToFilter } from "../Slice/fruitSlice";

export default function FilterBeverages() {
  const dispatch = useDispatch();
  const productsAll = useSelector((state) => state.products);
  const { filteredProducts } = useSelector((state) => state.fruitsfilter);
  const isFirst = React.useRef(true);

  React.useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    if (productsAll.length > 0) {
      const lastProduct = productsAll[productsAll.length - 1];
      const exists = filteredProducts.some((p) => p._id === lastProduct._id);

      if (!exists) {
        dispatch(addNewProductToFilter(lastProduct));
      }
    }
  }, [productsAll, filteredProducts, dispatch]);

  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  const getKey = (p) => p?._id ?? p?.id;

  return (
    <div className="filter-beverages px-4 md:px-10 lg:px-20 xl:px-40 py-5 container mx-auto flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/4 w-full">
        <PriceFilter />
      </div>

      <div className="lg:w-3/4 w-full">
        <div
          className="h-[250px] md:h-[330px] bg-center bg-cover mx-auto rounded-xl"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className="ml-5 md:ml-10 pt-8 md:pt-10">
            <span className="text-[#7C2D12] font-semibold bg-[#FFEDD5] px-2 text-sm py-1 md:py-2 rounded-full">
              Only This Week
            </span>
            <h1 className="text-[#39245F] text-xl md:text-3xl font-bold max-w-[400px] pt-3">
              Grocery store with different <br /> treasures
            </h1>
            <h1 className="text-gray-400 max-w-[400px] pt-3 text-sm md:text-base">
              We have prepared special discounts for you on grocery <br />
              products...
            </h1>
            <div className="flex mt-4 gap-3">
              <button className="bg-white px-3 md:px-4 py-2 rounded-2xl flex gap-2 md:gap-4 border border-gray-300 text-sm md:text-base">
                Shop Now <ArrowRightAltIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((data) => {
            const key = getKey(data);
            const isFavorite = favorites.some((item) => getKey(item) === key);
            const isInCart = cart.some((item) => getKey(item) === key);

            return (
              <div
                key={key}
                className="border border-gray-200 p-3 rounded-md flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <h1 className="bg-red-600 rounded-full text-[10px] text-white p-1">
                    {data.discount}
                  </h1>
                  <button onClick={() => dispatch(toggleLike(data))}>
                    {isFavorite ? (
                      <FavoriteIcon fontSize="small" color="error" />
                    ) : (
                      <FavoriteBorderIcon fontSize="small" />
                    )}
                  </button>
                </div>

                <img
                  className="w-24 h-28 md:w-28 md:h-32 mx-auto object-contain"
                  src={data.img}
                  alt={data.name}
                />

                <h1 className="text-sm md:text-md py-2">{data.name}</h1>

                <div className="flex items-center gap-2">
                  <Rating
                    name={`rating-${key}`}
                    value={data.rating}
                    size="small"
                    readOnly
                  />
                  <h1 className="text-gray-400 text-sm">{data.rating}</h1>
                </div>

                <div className="flex pt-2 items-center gap-2">
                  <h1 className="text-lg md:text-xl text-red-600 font-bold">
                    {data.price}
                  </h1>
                  <s className="font-semibold text-xs md:text-sm">
                    {data.lastprice}
                  </s>
                </div>

                <div className="flex py-3 items-center gap-2">
                  <div className="bg-[#16A34A] hover:bg-[#157e3b] rounded-md p-1">
                    <button onClick={() => dispatch(toggleCart(data))}>
                      {isInCart ? (
                        <DoneIcon fontSize="medium" color="error" />
                      ) : (
                        <ShoppingCartIcon fontSize="medium" />
                      )}
                    </button>
                  </div>
                  <h1 className="text-[#16A34A] font-semibold text-sm">
                    {data.status}
                  </h1>
                  <Link to={`/products/${data._id}`}>
                    <VisibilityIcon fontSize="medium" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
