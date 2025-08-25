import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, restoreSession } from "../Slice/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleRestore = () => {
    dispatch(restoreSession());
  };

  return (
    <div className="container mx-auto px-4 py-10 flex justify-center">
      <div className="w-full sm:w-[450px] md:w-[500px] lg:w-[600px] bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>

        {isAuthenticated && (
          <div className="mb-3 text-green-600 text-center text-sm">
            ✅ You are authenticated as {user?.name || user?.email}
          </div>
        )}

        <p className="text-sm mb-4 text-center">
          If you have an account, sign in with your username or email address.
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="text-sm font-medium">Email address*</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 w-full rounded-xl mt-1 focus:ring-2 focus:ring-[#634C9F] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password*</label>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-3 w-full rounded-xl mt-1 focus:ring-2 focus:ring-[#634C9F] outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#634C9F] text-white font-semibold my-4 py-3 rounded-lg hover:bg-[#503a82] transition"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

        <button
          onClick={handleRestore}
          className="w-full bg-[#634C9F] text-white font-semibold py-3 rounded-lg hover:bg-[#503a82] transition mt-4"
        >
          Войти снова из LocalStorage
        </button>
      </div>
    </div>
  );
}
