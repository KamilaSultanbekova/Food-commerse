import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

export default function Favorite() {
  const cart = useSelector((state) => state.cart);

  return (
    <section className="px-40 py-2 container mx-auto flex justify-between gap-10">
      <div className="">
        <h2 className=" text-3xl font-bold my-5 absolute left-1/2 transform -translate-x-1/2">
          My Cart
        </h2>

        {cart.length === 0 ? (
          <h1>You have no items in your cart.</h1>
        ) : (
          <div className="flex mt-25">
            {cart.map((product) => (
              <div
                key={product._id}
                className="border border-gray-200 p-10 py-5 rounded-md w-60"
              >
                <div className="flex items-start justify-between">
                  <h1 className="bg-red-600 rounded-full text-[10px] text-white p-1">
                    {product.discount}
                  </h1>
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
                  <h1 className="text-[#16A34A] font-semibold pt-1">
                    {product.status}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
