import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Adjust this import based on your routing library
import { motion } from "framer-motion";

const SubmissionSuccess = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect logic can be placed here if needed
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <motion.h1
          className="text-4xl font-bold text-green-600 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Success!
        </motion.h1>
        <p className="text-gray-700 mb-6">
          Your Admission Form has been submitted successfully! We will get back
          to you soon.
        </p>
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-green-600 animate-pulse"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12l5 5L20 7" />
            <circle cx="12" cy="12" r="10" />
          </svg> */}

          <svg
            className="checkmark w-24 h-24 mx-auto relative top-1 right-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle stroke-[#4bb71b] fill-white"
              cx="26"
              cy="26"
              r="25"
            />
            <path
              className="checkmark__check stroke-[#4bb71b]"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </motion.div>
        <Link
          to="/"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default SubmissionSuccess;
