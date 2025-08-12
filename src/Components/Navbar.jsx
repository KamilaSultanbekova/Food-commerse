import Icon from "../assets/mainicon.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <div>
      <div className=" py-2 flex justify-center gap-10 bg-[#634C9F] text-white items-center">
        <h1 className="text-sm">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </h1>
        <h1 className="flex gap-3 text-sm">
          Until the end of the sale: <span className="font-bold">47</span> days
          <span className="font-bold">06</span> hours
          <span className="font-bold">55</span> minutes
          <span className="font-bold">51</span> sec.
        </h1>
      </div>
      <div className="px-40 py-2 container mx-auto flex justify-between gap-10">
        <div className="flex gap-4 text-gray-600">
          <h1>About Us</h1>
          <h1>My Account</h1>
          <h1>Wishlist</h1> <hr />
          <h1>
            We deliver to you every day from{" "}
            <span className="text-[#EA580C]">7:00 to 23:00</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <select name="Lang">
            <option defaultValue={true} value="english">
              English
            </option>
            <option value="russian">Russian</option>
            <option value="uzbek">Uzbek</option>
          </select>
          <select name="currency">
            <option defaultValue={true} value="usd">
              USD
            </option>
            <option value="uzs">UZS</option>
          </select>
          <h1>Order Tracking</h1>
        </div>
      </div>
      <div className="px-40 pt-5 container mx-auto flex gap-9">
        <img src={Icon} className="w-50 h-full" />
        <div>
          <FmdGoodOutlinedIcon fontSize="large" />
        </div>
        <h1 className="text-gray-500">
          Deliver to <br />
          <span className="text-gray-800 font-semibold">all</span>
        </h1>
        <input
          className=" relative bg-gray-100 w-120 h-13 px-3 text-gray-900 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
          type="text"
          placeholder="Search for products, categories or brands..."
        />
        <span className="absolute right-125 -translate-y-1/2 top-30">
          <SearchIcon fontSize="large" />
        </span>
        <NavLink to="/login">
          <div className="flex">
            <div>
              <PersonOutlinedIcon fontSize="large" />
            </div>
            <div>
              <h1 className="text-gray-500 text-sm">Sign in</h1>
              <h1 className="font-semibold">Account</h1>
            </div>
          </div>
        </NavLink>
        <NavLink to="favourites">
          <FavoriteBorderOutlinedIcon fontSize="large" />
        </NavLink>
        <NavLink to="cart">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </NavLink>
      </div>
      <div className="px-40 pt-3 container mx-auto flex justify-between">
        <div className="flex gap-4">
          <select onChange={handleChange} className="font-semibold" name="Home">
            <option value="/" defaultValue={true}>Home</option>
            <option value="/filterfruits">Fruits & Vegetables</option>
            <option value="/filterbeverages">Beverages</option>
          </select>
          <NavLink to='/filterfruits'><h1 className="font-semibold">Fruits & Vegetables</h1></NavLink>
         <NavLink to='/filterbeverages'><h1 className="font-semibold">Beverages</h1></NavLink>
          <NavLink to='/blog'><h1 className="font-semibold">Blog</h1></NavLink>
          <NavLink to='/contact'><h1 className="font-semibold">Contact</h1></NavLink>
        </div>
        <div className="flex gap-4">
          <select className="font-semibold" name="Trending Products" id="">
            <option defaultValue={true} value="Trending Products">
              Trending Products
            </option>
          </select>
          <select
            className="font-semibold text-red-600"
            name="Almost Finished"
            id=""
          >
            <option defaultValue={true} value="Almost Finished">
              Almost Finished
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
