import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../Slice/favoritesSlice";
import { toggleCart } from "../Slice/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";

export default function Favorite() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const getKey = (p) => p?._id ?? p?.id;

  return (
    <section className="px-40 py-2 container mx-auto flex justify-between gap-10">
      <div className="">
        <h2 className=" text-3xl font-bold my-5 flex justify-center ml-130">
          My Favorites
        </h2>

        {favorites.length === 0 ? (
          <h1 className="ml-124">You haven’t liked any product yet.</h1>
        ) : (
          <div className="grid grid-cols-5 mt-25">
            {favorites.map((product) => {
              const key = getKey(product);
              const isFavorite = favorites.some((item) => getKey(item) === key);
              return (
                <div
                  key={product.key}
                  className="border border-gray-200 px-6 py-5 rounded-md w-55"
                >
                  <div className="flex items-start justify-between ">
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
                    className="w-28 h-30 mx-auto"
                    src={product.img}
                    alt={product.name}
                  />

                  <h1 className="text-md py-2">{product.name}</h1>
                  <div className="flex items-center gap-2">
                    <Rating
                      name={`rating-${product._id}`}
                      value={product.rating}
                      size="small"
                      readOnly
                    />
                    <h1 className="text-gray-400">{product.rating}</h1>
                  </div>

                  <div className="flex pt-2">
                    <h1 className="text-xl text-red-600 font-bold">
                      {product.price}
                    </h1>
                    <s className="font-semibold text-sm pl-1">
                      {product.lastprice}
                    </s>
                  </div>

                  <div className="flex py-3">
                    <div className="bg-[#16A34A] hover:bg-[#157e3b] rounded-md p-1">
                      <ShoppingCartIcon
                        fontSize="medium"
                        onClick={() => dispatch(toggleCart(product))}
                      />
                    </div>
                    <h1 className="text-[#16A34A] font-semibold pl-2 pt-1">
                      {product.status}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
