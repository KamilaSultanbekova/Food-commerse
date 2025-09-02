import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import { toggleLike } from "../Slice/favoritesSlice";
import { toggleCart } from "../Slice/cartSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { addNewProductToFilter } from "../Slice/fruitSlice";

export default function FilterSearch() {
  const dispatch = useDispatch();
  const productsAll = useSelector((state) => state.products);
  const isFirst = React.useRef(true);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  const filteredProducts = useSelector(
    (state) => state.filterSearch.filteredProducts
  );

  const getKey = (p) => p?._id ?? p?.id;

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
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-4 container mx-auto">
      <div
        className="
          mt-4 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-4"
      >
        {filteredProducts.map((data) => {
          const key = getKey(data);
          const isFavorite = favorites.some((item) => getKey(item) === key);
          const isInCart = cart.some((item) => getKey(item) === key);

          return (
            <div
              key={key}
              className="border border-gray-200 p-3 py-5 rounded-md shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <h1 className="bg-red-600 rounded-full text-[10px] text-white px-2 py-1">
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
                className="w-28 h-30 mx-auto object-contain"
                src={data.img}
                alt={data.name}
              />

              <h1 className="text-md py-2 font-medium text-center">
                {data.name}
              </h1>

              <div className="flex items-center gap-2 justify-center">
                <Rating
                  name={`rating-${key}`}
                  value={data.rating}
                  size="small"
                  readOnly
                />
                <h1 className="text-gray-400 text-sm">{data.rating}</h1>
              </div>

              <div className="flex pt-2 justify-center gap-2">
                <h1 className="text-xl text-red-600 font-bold">{data.price}</h1>
                <s className="font-semibold text-sm">{data.lastprice}</s>
              </div>

              <div className="flex py-3 items-center justify-between">
                <div className="bg-[#16A34A] hover:bg-[#157e3b] rounded-md p-1">
                  <button onClick={() => dispatch(toggleCart(data))}>
                    {isInCart ? (
                      <DoneIcon fontSize="medium" color="error" />
                    ) : (
                      <ShoppingCartIcon fontSize="medium" />
                    )}
                  </button>
                </div>
                <div className="flex gap-3 items-center">
                  <h1 className="text-[#16A34A] font-semibold">
                    {data.status}
                  </h1>
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
  );
}
