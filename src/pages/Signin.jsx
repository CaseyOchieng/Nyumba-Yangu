import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";
import {
  SignInFailure,
  SignInStart,
  SignInSuccess,
} from "../redux/user/userSlice.js";
export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      dispatch(SignInFailure("All fields are required"));
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      dispatch(SignInFailure("Please enter a valid email address"));
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      dispatch(SignInFailure("Password must be at least 8 characters long"));
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    // Dispatch SignInStart action before API call
    dispatch(SignInStart());

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Dispatch SignInFailure with error message
        dispatch(SignInFailure(data.message || "Something went wrong"));
        setError(data.message);
        setLoading(false);
        return;
      }

      if (data.success) {
        // Dispatch SignInSuccess with user data
        dispatch(SignInSuccess(data.user)); // Assuming the API returns user data
        navigate("/");
      }
    } catch (error) {
      // Dispatch SignInFailure with error message
      dispatch(
        SignInFailure(error.message || "Something went wrong during signin")
      );
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col p-3 max-w-lg items-center justify-center h-screen mx-auto  ">
        <h1 className="text-2xl text-center font-bold my-7">
          Login <span className="">🗿</span>
        </h1>
        <form className="flex flex-col gap-4 w-full " onSubmit={handleSubmit}>
          <input
            className="border border-slate-400 p-3 rounded-lg"
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />
          <input
            className="border border-slate-400 p-3 rounded-lg"
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            minLength={6}
            required
          />
          <button
            disabled={loading}
            className="bg-slate-600 text-white p-3 rounded-lg hover:bg-slate-800 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {/* Google Signin */}
          <OAuth />
        </form>
        <div className="my-7">
          <p>
            Don&lsquo;t have an account?{" "}
            <Link
              className="text-slate-600 hover:underline transition duration-200 ease-in-out"
              to="/signup"
            >
              register
            </Link>
          </p>
        </div>
        {error && <p className="text-red-500 text-center ">{error}</p>}
      </div>
    </>
  );
}
