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
    <div className="px-40 py-10 container mx-auto flex justify-center">
      <div>
        <h2 className="text-2xl flex justify-center font-bold mb-4">Login</h2>
        {isAuthenticated && (
          <div className="mb-3 text-green-600 flex justify-center">
            ✅ You are authenticated as {user?.name || user?.email}
          </div>
        )}
        <h1 className="text-sm  mb-4 flex justify-center">
          If you have an account, sign in with your username or email address.
        </h1>
        <form className="max-w-md space-y-4" onSubmit={handleLogin}>
          <h1>Email address*</h1>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 w-full rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h1>Password*</h1>
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 w-full rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#634C9F] text-white px-51 my-4 py-3 rounded"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={handleRestore}
          className="bg-[#634C9F] text-white px-30 py-3 rounded"
        >
          Войти снова из LocalStorage
        </button>
      </div>
    </div>
  );
}
