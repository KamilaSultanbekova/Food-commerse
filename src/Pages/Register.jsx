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
    <div className="px-40 py-10 container mx-auto flex justify-center">
      <div>
        <h2 className="text-2xl flex justify-center font-bold mb-4">
          Register
        </h2>
        <h1 className="text-sm  mb-4 flex justify-center">
          There are many advantages to creating an account: the payment process
          is <br />
          faster, shipment tracking is possible and much more.
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <h1>Username*</h1>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-xl"
            required
          />
          <h1>Email address*</h1>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-xl"
            required
          />
          <h1>Password*</h1>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-xl"
            required
          />
          <h1 className="text-sm  mb-4 flex justify-center">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </h1>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#634C9F] text-white px-49 py-2 rounded"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
