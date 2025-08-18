import Avatar from "../assets/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import { logout } from "../Slice/authSlice";
import { addVendor } from "../Slice/vendorSlice";
import { useNavigate } from "react-router-dom";

export default function Vendor() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const vendors = useSelector((state) => state.vendor.vendors);

  const [vendorData, setVendorData] = useState({
    name: "",
    lastname: "",
    shopname: "",
    shopUrl: "",
    number: "",
  });

  const handleChange = (e) => {
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = vendors.find(
      (v) =>
        v.name.toLowerCase() === vendorData.name.toLowerCase() &&
        v.shopUrl.toLowerCase() === vendorData.shopUrl.toLowerCase()
    );

    if (exists) {
      alert("Vendor with the same name and shop URL already exists!");
      return;
    }

    dispatch(addVendor(vendorData));
    navigate("/crud");
  };

  return (
    <div className="px-40 py-10 container mx-auto flex gap-10">
      <div>
        <div className="flex gap-3 items-center">
          <img src={Avatar} alt="Avatar" />
          <div>
            <h1>Welcome back,</h1>
            <h1 className="text-sm font-bold">{user.email}</h1>
          </div>
        </div>

        <div className="flex gap-10 mt-3">
          <div className="border border-gray-400 rounded mt-5 ml-2 w-74 h-full">
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              Dashboard
            </p>
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              Orders
            </p>
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              Downloads
            </p>
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              Addresses
            </p>
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              Account details
            </p>
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              Wishlist
            </p>
            <p className="border-b border-b-gray-400 py-2 px-3 font-bold">
              <RepeatOutlinedIcon /> Compare
            </p>
            <p
              className="border-b border-b-gray-400 py-2 px-3 font-bold"
              onClick={logout}
            >
              Log out
            </p>
          </div>

          <div className="mt-5">
            <h1 className="mb-2 font-bold text-xl">Update account to Vendor</h1>
            <form onSubmit={handleSubmit}>
              <div className="my-2">
                <h1>First Name *</h1>
                <input
                  name="name"
                  type="text"
                  required
                  value={vendorData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-215 rounded-xl"
                />
              </div>
              <div className="mt-5">
                <h1>Last Name *</h1>
                <input
                  name="lastname"
                  type="text"
                  required
                  value={vendorData.lastname}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-215 rounded-xl"
                />
              </div>
              <div className="mt-5">
                <h1>Shop Name *</h1>
                <input
                  name="shopname"
                  type="text"
                  required
                  value={vendorData.shopname}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-215 rounded-xl"
                />
              </div>
              <div className="mt-5">
                <h1>Shop URL *</h1>
                <input
                  name="shopUrl"
                  type="text"
                  required
                  value={vendorData.shopUrl}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-215 rounded-xl"
                  placeholder="example.com"
                />
              </div>
              <div className="mt-5">
                <h1>Phone Number *</h1>
                <input
                  name="number"
                  type="number"
                  required
                  value={vendorData.number}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-215 rounded-xl"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" required />
                <span className="ml-1">
                  I have read and agree to the{" "}
                  <span className="text-blue-500">Terms & Conditions.</span>
                </span>
              </div>
              <button
                type="submit"
                navigate="/crud"
                onClick={handleSubmit}
                className="border border-gray-300 px-3 py-2 mt-5 rounded text-gray-500"
              >
                Become a Vendor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
