import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Payment from "../assets/Main.png";
import Offer from "../assets/Main (1).png";
import { toggleLike } from "../Slice/favoritesSlice";
import { toggleCart } from "../Slice/cartSlice";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const toComparable = (v) => {
    const n = Number(v);
    return Number.isNaN(n) ? String(v) : n;
  };
  const getKey = (p) => p?._id ?? p?.id;
  const wantedId = toComparable(id);

  const product = useSelector((state) => {
    const buckets = [
      state.fruits?.all ?? state.fruits?.items,
      state.beverages?.all ?? state.beverages?.items,

      state.fruitsfilter?.all ??
        state.fruitsfilter?.items ??
        state.fruitsfilter?.filteredProducts,
      state.beveragesfilter?.all ??
        state.beveragesfilter?.items ??
        state.beveragesfilter?.filteredProducts,

      state.cart,
      state.favorites,
    ].filter(Boolean);

    const flat = [];
    for (const arr of buckets) if (Array.isArray(arr)) flat.push(...arr);

    for (const p of flat) {
      const k = getKey(p);
      if (k == null) continue;
      if (toComparable(k) === wantedId) return p;
    }
    return undefined;
  });

  const favorites = useSelector((state) => state.favorites ?? []);
  const [count, setCount] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-xl">Product not found</h2>
        <p className="text-gray-500 mt-2">id: {String(id)}</p>
        <Link to="/" className="inline-block mt-4 underline">
          Go back
        </Link>
      </div>
    );
  }

  const key = getKey(product);
  const isFavorite = favorites.some((item) => getKey(item) === key);
  const ratingValue = Number(product.rating) || 0;

  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => (c > 1 ? c - 1 : c));

  return (
    <div className="px-40 py-8 container mx-auto">
      <div className="flex gap-8">
        <div className="flex">
          {product.discount && (
            <span className="bg-red-600 rounded-full text-[10px] text-white p-2 px-3 h-8">
              {product.discount}
            </span>
          )}
          <img
            src={product.img}
            alt={product.name}
            className="w-120 rounded-lg"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Rating
              name={`rating-${key}`}
              value={ratingValue}
              size="small"
              readOnly
            />
            <span className="text-gray-500 text-sm">
              {ratingValue.toFixed(1)}
            </span>
          </div>

          <p className="mt-3 text-gray-600">
            {product.description ??
              "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper."}
          </p>

          <div className="gap-2 pt-3">
            <div>
              <span className="text-2xl text-red-600 font-bold">
                {product.price}
              </span>
              {product.lastprice && (
                <s className="font-semibold text-sm text-gray-500">
                  {product.lastprice}
                </s>
              )}
            </div>
            <div>
              <button className="bg-[#16A34A] text-white text-[14px] font-semibold py-3 px-3 rounded my-3 ">
                Order on WhatsApp
              </button>
            </div>
            <div>
              <img src={Offer} alt="" />
            </div>
          </div>

          <div>
            <div className="border rounded-lg inline-flex items-center mt-4 py-1">
              <button className="px-3 py-1" onClick={handleDecrement}>
                -
              </button>
              <span className="px-4">{count}</span>
              <button className="px-3 py-1" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button
              onClick={toggleCart}
              className="bg-[#16A34A] text-white text-[14px] font-semibold py-3 px-5 rounded my-3 mx-5 "
            >
              Add to cart
            </button>
            <button className="bg-black text-white text-[14px] font-semibold py-3 px-7 rounded my-3 ">
              Buy now
            </button>
          </div>

          <div className="w-170">
            <img src={Payment} alt="Payment methods" />
          </div>
          <div className="mt-3">
            <button
              aria-label="toggle favorite"
              onClick={() => dispatch(toggleLike(product))}
              className=" p-1 border border-gray-300 rounded-xl"
            >
              {isFavorite ? (
                <FavoriteIcon fontSize="small" color="error" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </button>
            <span className="text-gray-800 text-sm pl-3">Add to Wishlist</span>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <h1 className="text-2xl ">Description</h1>
        <h1 className="text-[15px] mt-5">
          Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
          vitae magna in dui finibus malesuada et at nulla. Morbi elit
          ex,viverra vitae ante vel, blandit feugiat ligula. Fusce <br />
          fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
          sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in
          nunc tristique lacinia. Nullam aliquam mauris <br />
          eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel,
          dignissim a tortor.
        </h1>
        <h1 className="text-[15px] mt-5">
          Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
          eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
          Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
          Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies
          cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus
          blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
          Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis
          quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat
          mauris, sed egestas purus commodo vel.
        </h1>
      </div>
    </div>
  );
}