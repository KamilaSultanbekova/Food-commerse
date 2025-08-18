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
    const priceNumber = parseFloat(cur.price.replace("$", ""));
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

  return (
    <div className="px-40 py-5 container mx-auto">
      <form onSubmit={handleSubmit}>
        <img src={Coupon} alt="Coupon" />

        <div className="flex gap-10 mt-5">
          <div className="w-215">
            <img className="w-215" src={FreeShip} alt="Free Shipping" />

            <h1 className="text-3xl font-bold mt-4 mb-2">Billing Details</h1>

            <div className="flex gap-15">
              <div>
                <h1>First name*</h1>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-100 rounded-xl"
                />
              </div>
              <div>
                <h1>Last name*</h1>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-100 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h1>Company name (optional)</h1>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Country / Region*</h1>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Street address*</h1>
                <input
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                  placeholder="House number and street name"
                />
                <input
                  name="apt"
                  value={formData.apt}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div>
                <h1>Town / City*</h1>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>State*</h1>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>ZIP Code*</h1>
                <input
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Phone*</h1>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Email address*</h1>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Order Notes (optional)</h1>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="border border-gray-300 rounded-xl bg-[#E5E7EB] px-3 py-4 w-75 ">
              <h1 className="font-semibold">Your order</h1>

              <div className="flex justify-between text-gray-400 mt-2">
                <h1>Product</h1>
                <h1>Subtotal</h1>
              </div>

              <hr className="text-gray-100 my-2" />

              {cart.map((product) => (
                <div
                  key={product._id}
                  className="flex justify-between mt-1 text-sm"
                >
                  <p className="text-black">{product.name}</p>
                  <p>{product.price}</p>
                </div>
              ))}

              <hr className="text-gray-100 my-2" />

              <div className="flex justify-between mt-3 font-semibold">
                <h1>Total:</h1>
                <h1>${total.toFixed(2)}</h1>
              </div>

              <div className="flex items-center mt-3">
                <input type="checkbox" required />
                <h1 className="text-sm pl-2">
                  I have read and agree to the{" "}
                  <span className="text-purple-900">terms and conditions*</span>
                </h1>
              </div>

              <button
                type="submit"
                className="bg-[#634C9F] text-white px-24 py-2 rounded-xl mt-4"
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
