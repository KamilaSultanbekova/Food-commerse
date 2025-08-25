import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { submitOrder } from "../Slice/checkoutSlice";
import { useNavigate } from "react-router-dom";

import Coupon from "../assets/45.png";
import FreeShip from "../assets/46.png";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  const total = cart.reduce((acc, cur) => {
    const priceNumber = parseFloat(cur.price.replace("$", "")) || 0;
    return acc + priceNumber;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      submitOrder({
        billingData: formData,
        orderItems: cart,
        totalPrice: total.toFixed(2),
      })
    );
    navigate("/successful");
  };

  const InputField = ({
    label,
    name,
    type = "text",
    required,
    placeholder,
  }) => (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
      />
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-6">
      <form onSubmit={handleSubmit}>
        <img
          src={Coupon}
          alt="Coupon"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-6">
          <div className="lg:col-span-2">
            <img
              src={FreeShip}
              alt="Free Shipping"
              className="w-full max-w-sm mx-auto lg:mx-0"
            />

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 mb-4 text-center lg:text-left">
              Billing Details
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="First name*" name="firstName" required />
              <InputField label="Last name*" name="lastName" required />
            </div>

            <div className="space-y-4 mt-4">
              <InputField label="Company name (optional)" name="company" />
              <InputField label="Country / Region*" name="country" required />
              <div className="space-y-3">
                <InputField
                  label="Street address*"
                  name="street"
                  required
                  placeholder="House number and street name"
                />
                <InputField
                  name="apt"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <InputField label="Town / City*" name="city" required />
              <InputField label="State*" name="state" required />
              <InputField label="ZIP Code*" name="zip" type="number" required />
              <InputField label="Phone*" name="phone" type="tel" required />
              <InputField
                label="Email address*"
                name="email"
                type="email"
                required
              />
              <div>
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Order Notes (optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
                  rows="3"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border border-gray-300 rounded-xl bg-gray-100 px-4 py-5">
              <h1 className="font-semibold text-lg">Your order</h1>

              <div className="flex justify-between text-gray-500 mt-3 text-sm">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <hr className="my-2" />

              {cart.map((product) => (
                <div
                  key={product._id}
                  className="flex justify-between mt-1 text-sm"
                >
                  <p className="text-gray-900">{product.name}</p>
                  <p>{product.price}</p>
                </div>
              ))}

              <hr className="my-2" />

              <div className="flex justify-between mt-3 font-semibold text-base">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex items-start mt-4 gap-2">
                <input type="checkbox" required className="mt-1" />
                <p className="text-sm">
                  I have read and agree to the{" "}
                  <span className="text-purple-900 underline cursor-pointer">
                    terms and conditions*
                  </span>
                </p>
              </div>

              <button
                type="submit"
                className="bg-purple-700 text-white w-full py-3 rounded-xl mt-5 hover:bg-purple-800 transition"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
