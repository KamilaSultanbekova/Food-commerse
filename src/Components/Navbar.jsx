import Icon from "../assets/mainicon.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, filterProducts } from "../Slice/filtersearchSlice";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  const handleChange = (e) => {
    navigate(e.target.value);
  };
  const searchQuery = useSelector((state) => state.filterSearch.searchQuery);
  const handleChangeF = (e) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value));
    dispatch(filterProducts());

    if (window.location.pathname !== "/filtersearch") {
      navigate("/filtersearch");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(filterProducts());
      navigate("/filtersearch");
    }
  };

  const handleSearchClick = () => {
    dispatch(filterProducts());
    navigate("/filtersearch");
  };

  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    let endTime = localStorage.getItem("saleEndTime");
    if (!endTime) {
      endTime = new Date().getTime() + 72 * 60 * 60 * 1000;
      localStorage.setItem("saleEndTime", endTime);
    } else {
      endTime = Number(endTime);
    }
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      if (distance <= 0) {
        clearInterval(interval);
        localStorage.removeItem("saleEndTime");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md">
      <div className="hidden lg:flex py-2 justify-center gap-10 bg-[#634C9F] text-white items-center">
        <h1 className="text-sm">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </h1>
        <h1 className="flex gap-3 text-sm">
          Until the end of the sale:{" "}
          <span className="font-bold">{timeLeft.days}</span> days
          <span className="font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>{" "}
          h
          <span className="font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>{" "}
          m
          <span className="font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>{" "}
          s
        </h1>
      </div>

      <div className="hidden lg:flex px-40 py-2 container mx-auto justify-between gap-10 text-sm text-gray-600">
        <div className="flex gap-4">
          <h1>About Us</h1>
          <h1>My Account</h1>
          <h1>Wishlist</h1>
          <h1>
            We deliver to you every day from{" "}
            <span className="text-[#EA580C]">7:00 to 23:00</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <select>
            <option>English</option>
            <option>Russian</option>
            <option>Uzbek</option>
          </select>
          <select>
            <option>USD</option>
            <option>UZS</option>
          </select>
          <h1>Order Tracking</h1>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-40 py-4 flex items-center justify-between">
        {/* logo */}
        <Link to="/">
          <img src={Icon} className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex flex-1 mx-5 items-center bg-gray-100 px-3 rounded-lg border border-gray-200">
          <input
            className="flex-1 bg-transparent outline-none py-2 text-sm"
            type="text"
            value={searchQuery}
            onChange={handleChangeF}
            onKeyDown={handleKeyDown}
            placeholder="Search for products..."
          />
          <button onClick={handleSearchClick}>
            <SearchIcon />
          </button>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="hidden md:block text-sm">Hi, {user.name}</span>
              <button
                onClick={() => dispatch(logout())}
                className="hidden md:block px-3 py-1 bg-black text-white rounded-lg text-sm"
              >
                Logout
              </button>
              <Link to="/vendor">
                <PersonOutlinedIcon fontSize="large" />
              </Link>
            </>
          ) : (
            <Link to="/login">
              <PersonOutlinedIcon fontSize="large" />
            </Link>
          )}

          <NavLink to="/favourites">
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </Badge>
          </NavLink>

          <NavLink to="/cart">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </NavLink>

          <button
            className="block lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center bg-gray-100 px-3 rounded-lg border border-gray-200">
          <Link to="/filtersearch" className="flex items-center w-full">
            <input
              className="border-0 outline-0 items-center w-full bg-transparent"
              type="text"
              value={searchQuery}
              onChange={handleChangeF}
              onKeyDown={handleKeyDown}
              onClick={handleSearchClick}
              placeholder="Search for products, categories or brands..."
            />
          </Link>
          <Link to="/filtersearch">
            <button onClick={handleSearchClick}>
              <SearchIcon fontSize="large" />
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex px-40 pb-3 justify-between items-center">
        <div className="flex gap-6 font-semibold text-gray-700">
          <select
            onChange={handleChange}
            defaultValue="/"
            className="font-semibold"
          >
            <option value="/">Home</option>
            <option value="/filterfruits">Fruits & Vegetables</option>
            <option value="/filterbeverages">Beverages</option>
          </select>
          <NavLink to="/filterfruits">Fruits & Vegetables</NavLink>
          <NavLink to="/filterbeverages">Beverages</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex gap-4">
          <select className="font-semibold">
            <option>Trending Products</option>
          </select>
          <select className="font-semibold text-red-600">
            <option>Almost Finished</option>
          </select>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-gray-50 px-4 py-4 flex flex-col gap-4 text-gray-800 font-medium">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/filterfruits" onClick={() => setMenuOpen(false)}>
            Fruits & Vegetables
          </NavLink>
          <NavLink to="/filterbeverages" onClick={() => setMenuOpen(false)}>
            Beverages
          </NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}
