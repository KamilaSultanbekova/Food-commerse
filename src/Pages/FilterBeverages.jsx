import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PriceFilter from "../Components/FilterSideBar";
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
  const { filteredProducts } = useSelector((state) => state.beveragesfilter);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  const getKey = (p) => p?._id ?? p?.id;

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

  return (
    <div className="px-40 py-5 container mx-auto flex justify-between gap-10">
      <div>
        <PriceFilter />
      </div>

      <div>
        <div
          className="h-[330px] bg-center bg-cover mx-auto rounded-xl"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className="ml-10 pt-10">
            <span className="text-[#7C2D12] font-semibold bg-[#FFEDD5] px-2 text-sm py-2 rounded-full">
              Only This Week
            </span>
            <h1 className="text-[#39245F] text-3xl font-bold w-120 pt-3">
              Grocery store with different <br /> treasures
            </h1>
            <h1 className="text-gray-400 w-120 pt-3">
              We have prepared special discounts for you on grocery <br />
              products...
            </h1>
            <div className="flex mt-5 gap-4">
              <button className="bg-white px-4 py-2 rounded-2xl flex gap-4 border border-gray-300">
                Shop Now <ArrowRightAltIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5">
          {filteredProducts.map((data) => {
            const key = getKey(data);
            const isFavorite = favorites.some((item) => getKey(item) === key);
            const isInCart = cart.some((item) => getKey(item) === key);

            return (
              <div
                key={key}
                className="border border-gray-200 p-3 py-5 rounded-md"
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
                  className="w-28 h-30 mx-auto"
                  src={data.img}
                  alt={data.name}
                />

                <h1 className="text-md py-2">{data.name}</h1>
                <div className="flex items-center gap-2">
                  <Rating
                    name={`rating-${key}`}
                    value={data.rating}
                    size="small"
                    readOnly
                  />
                  <h1 className="text-gray-400">{data.rating}</h1>
                </div>

                <div className="flex pt-2">
                  <h1 className="text-xl text-red-600 font-bold">
                    {data.price}
                  </h1>
                  <s className="font-semibold text-sm pl-1">{data.lastprice}</s>
                </div>

                <div className="flex py-3 justify-between items-center ">
                  <div className="bg-[#16A34A] hover:bg-[#157e3b] rounded-md p-1">
                    <button onClick={() => dispatch(toggleCart(data))}>
                      {isInCart ? (
                        <DoneIcon fontSize="meduim" color="error" />
                      ) : (
                        <ShoppingCartIcon fontSize="meduim" />
                      )}
                    </button>
                  </div>
                  <div>
                    <h1 className="text-[#16A34A] font-semibold pt-1">
                      {data.status}
                    </h1>
                  </div>
                  <div>
                    <Link to={`/products/${data._id}`}>
                      <VisibilityIcon fontSize="medium" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
