import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Slice/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 flex justify-center">
      <div className="w-full sm:w-[450px] md:w-[500px] lg:w-[600px] bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl text-center font-bold mb-4">Register</h2>

        <p className="text-sm mb-4 text-center text-gray-600">
          There are many advantages to creating an account: the payment process
          is faster, shipment tracking is possible and much more.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Username*</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-xl mt-1 focus:ring-2 focus:ring-[#634C9F] outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email address*</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-xl mt-1 focus:ring-2 focus:ring-[#634C9F] outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password*</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-xl mt-1 focus:ring-2 focus:ring-[#634C9F] outline-none"
              required
            />
          </div>

          <p className="text-xs text-center text-gray-500">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#634C9F] text-white font-semibold py-3 rounded-lg hover:bg-[#503a82] transition"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
