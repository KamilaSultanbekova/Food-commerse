import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { toggleLike } from "../Slice/favoritesSlice";
import { toggleCart } from "../Slice/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const getKey = (p) => p?._id ?? p?.id;

  return (
    <section className="px-40 md:px-40 sm:px-5 py-5 container mx-auto">
      <div>
        <h2 className=" text-3xl font-bold my-5 flex justify-center">
          My Cart
        </h2>

        {cart.length === 0 ? (
          <h1 className="text-center text-lg text-gray-600">
            You have no items in your cart.
          </h1>
        ) : (
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-5 mt-10">
            {cart.map((product) => {
              const key = getKey(product);
              const isFavorite = favorites.some((item) => getKey(item) === key);
              const isInCart = cart.some((item) => getKey(item) === key);

              return (
                <div
                  key={product._id}
                  className="border border-gray-200 p-5 rounded-md w-full"
                >
                  <div className="flex items-start justify-between">
                    <h1 className="bg-red-600 rounded-full text-[10px] text-white p-1">
                      {product.discount}
                    </h1>
                    <button onClick={() => dispatch(toggleLike(product))}>
                      {isFavorite ? (
                        <FavoriteIcon fontSize="small" color="error" />
                      ) : (
                        <FavoriteBorderIcon fontSize="small" />
                      )}
                    </button>
                  </div>

                  <img
                    className="w-28 h-30 mx-auto my-3"
                    src={product.img}
                    alt={product.name}
                  />

                  <h1 className="text-md py-2 text-center">{product.name}</h1>
                  <div className="flex items-center justify-center gap-2">
                    <Rating
                      name={`rating-${product._id}`}
                      value={product.rating}
                      size="small"
                      readOnly
                    />
                    <h1 className="text-gray-400">{product.rating}</h1>
                  </div>

                  <div className="flex pt-2 justify-center">
                    <h1 className="text-xl text-red-600 font-bold">
                      {product.price}
                    </h1>
                    <s className="font-semibold text-sm pl-1">
                      {product.lastprice}
                    </s>
                  </div>

                  <div className="flex flex-col items-center py-3 gap-3">
                    <div className="bg-[#16A34A] hover:bg-[#157e3b] rounded-md text-sm w-full text-center py-2">
                      <button
                        className="w-full text-white"
                        onClick={() => dispatch(toggleCart(product))}
                      >
                        {isInCart ? "Delete from Cart" : <ShoppingCartIcon />}
                      </button>
                    </div>
                    <h1 className="text-[#16A34A] font-semibold">
                      {product.status}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {cart.length !== 0 ? (
        <div className="flex justify-end mt-5 sm:justify-center">
          <Link to="/checkout">
            <h1 className="bg-[#634C9F] px-5 py-2 rounded-xl text-white text-sm font-semibold hover:bg-[#3f3262]">
              Order
            </h1>
          </Link>
        </div>
      ) : (
        <span></span>
      )}
    </section>
  );
}
