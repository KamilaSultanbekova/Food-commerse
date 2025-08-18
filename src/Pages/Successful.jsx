import { NavLink } from "react-router-dom";
import Success from "../assets/payment-validation_mobile.png";
export default function Successful() {
  return (
    <div className="px-40 pt-20 container mx-auto flex justify-center">
      <div>
        <img src={Success} />
        <NavLink to="/">
          <button className="ml-22 mt-5 border border-gray-300 px-3 py-2 rounded-xl font-semibold text-sm items-center ">
            Go to Home page
          </button>
        </NavLink>
      </div>
    </div>
  );
}
