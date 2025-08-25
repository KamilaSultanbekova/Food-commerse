import { NavLink } from "react-router-dom";
import Success from "../assets/payment-validation_mobile.png";

export default function Successful() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="text-center">
        <img
          src={Success}
          alt="Payment Successful"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
        />

        <NavLink to="/">
          <button className="mt-6 border border-gray-300 px-5 py-2 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition">
            Go to Home Page
          </button>
        </NavLink>
      </div>
    </div>
  );
}
