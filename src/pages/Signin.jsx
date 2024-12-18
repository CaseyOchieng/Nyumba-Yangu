import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    setError(null);

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
        throw new Error(data.message || "Something went wrong");
      }

      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message || "Something went wrong during signup");
    } finally {
      setLoading(false);
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
        {error && <p className="text-red-500 text-center mt-5">{error}</p>}
      </div>
    </>
  );
}
