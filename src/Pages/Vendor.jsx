import Avatar from "../assets/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import { logout } from "../Slice/authSlice";
import { addVendor, selectVendorByUser } from "../Slice/vendorSlice";
import { useNavigate } from "react-router-dom";

export default function Vendor() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const userId = user?.email?.toLowerCase() || null;
  const vendorProfile = useSelector((state) =>
    userId ? selectVendorByUser(state, userId) : null
  );
  const isVendor = !!vendorProfile;

  const [vendorData, setVendorData] = useState({
    name: vendorProfile?.name || "",
    lastname: vendorProfile?.lastname || "",
    shopname: vendorProfile?.shopname || "",
    shopUrl: vendorProfile?.shopUrl || "",
    number: vendorProfile?.number || "",
  });

  const handleChange = (e) => {
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User is not defined. Please log in.");
      return;
    }

    dispatch(
      addVendor({
        userId,
        ...vendorData,
      })
    );

    navigate("/crud");
  };

  return (
    <div className="px-4 md:px-20 lg:px-40 py-10 container mx-auto flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/4">
        <div className="flex gap-3 items-center">
          <img src={Avatar} alt="Avatar" className="w-12 h-12" />
          <div>
            <h1>Welcome back,</h1>
            <h1 className="text-sm font-bold break-all">{user?.email}</h1>
          </div>
        </div>

        <div className="border border-gray-400 rounded mt-5 w-full hidden lg:block">
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
          <p className="border-b border-b-gray-400 py-2 px-3 font-bold flex items-center gap-2">
            <RepeatOutlinedIcon fontSize="small" /> Compare
          </p>
          <p
            className="border-b border-b-gray-400 py-2 px-3 font-bold cursor-pointer"
            onClick={() => dispatch(logout())}
          >
            Log out
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/4 mt-5 lg:mt-0">
        {isVendor ? (
          <div>
            <h1 className="mb-5 font-bold text-xl">You are already a Vendor 🎉</h1>
            <div className="mb-4 text-sm text-gray-600">
              <div>
                <b>Name:</b> {vendorProfile.name} {vendorProfile.lastname}
              </div>
              <div>
                <b>Shop:</b> {vendorProfile.shopname} ({vendorProfile.shopUrl})
              </div>
              <div>
                <b>Phone:</b> {vendorProfile.number}
              </div>
            </div>
            <button
              onClick={() => navigate("/crud")}
              className="border border-gray-300 px-5 py-3 rounded text-gray-700 font-bold hover:bg-gray-100"
            >
              Go to CRUD
            </button>
          </div>
        ) : (
          <>
            <h1 className="mb-2 font-bold text-xl">Update account to Vendor</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h1>First Name *</h1>
                <input
                  name="name"
                  type="text"
                  required
                  value={vendorData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Last Name *</h1>
                <input
                  name="lastname"
                  type="text"
                  required
                  value={vendorData.lastname}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Shop Name *</h1>
                <input
                  name="shopname"
                  type="text"
                  required
                  value={vendorData.shopname}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div>
                <h1>Shop URL *</h1>
                <input
                  name="shopUrl"
                  type="text"
                  required
                  value={vendorData.shopUrl}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                  placeholder="example.com"
                />
              </div>
              <div>
                <h1>Phone Number *</h1>
                <input
                  name="number"
                  type="tel"
                  required
                  value={vendorData.number}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 w-full rounded-xl"
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" required />
                <span className="text-sm">
                  I have read and agree to the{" "}
                  <span className="text-blue-500">Terms & Conditions.</span>
                </span>
              </div>
              <button
                type="submit"
                className="border border-gray-300 px-3 py-2 rounded text-gray-500 w-full sm:w-auto"
              >
                Become a Vendor
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
