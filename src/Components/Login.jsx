import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in all fields");
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://raven-tutorials-backend-y1pc.onrender.com/login",
        {
          email,
          password,
        }
      );

      const data = await res.data;
      toast.success(data.message);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen w-full md:px-0 px-1 md:flex justify-center items-center">
        <form
          className="md:w-[30%] w-full  md:px-4 px-1  pb-8 shadow-2xl rounded-lg md:mt-0 mt-20"
          onSubmit={handleLogin}
        >
          <h1 className="font-bold text-3xl mb-4 py-6 text-center">LogIn</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-slate-100 h-10 rounded-lg outline-none px-2 shadow-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-slate-100 h-10 rounded-lg outline-none px-2 shadow-md"
            />
          </div>
          <div className="mb-4 text-end">
            <Link to="/forgot" className="text-blue-500 ">
              Forget Password
            </Link>
          </div>
          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-black text-white flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <ScaleLoader color="#ffffff"/>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
