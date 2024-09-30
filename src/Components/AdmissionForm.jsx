import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { useUpload } from "../hooks/useUpload";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function AdmissionForm() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const formFields = Object.fromEntries(formData.entries());

      // Validation
      if (Object.values(formFields).some((field) => !field) || !image) {
        throw new Error("Please fill all the fields");
      }

      if (formFields.name.length < 3)
        throw new Error("Name must be at least 3 characters long");
      if (!formFields.email.includes("@") || !formFields.email.includes("."))
        throw new Error("Invalid email format");
      if (formFields.pincode.length !== 6)
        throw new Error("Pincode must be 6 digits");
      if (
        formFields.contact.length !== 10 ||
        formFields.alternatecontact.length !== 10
      )
        throw new Error("Contact numbers must be 10 digits");
      if (formFields.standard < 1 || formFields.standard > 12)
        throw new Error("Standard must be between 1 to 12");
      if (formFields.contact === formFields.alternatecontact)
        throw new Error("Contact and Alternate Contact must be different");

      const { url, public_id } = await useUpload({ image });
      if (!url || !public_id) throw new Error("Failed to upload image");

      const res = await axios.post(
        "https://raven-tutorials-backend-y1pc.onrender.com/form",
        {
          ...formFields,
          profile: url,
          publicId: public_id,
        }
      );

      if (!res.data) throw new Error("Failed to register");

      toast.success("Student registered successfully");
      e.target.reset();
      navigate("/submit-successfully");
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      toast.error("File size should be less than 1MB");
    } else {
      setImage(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-10">
        <motion.div initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 2, x: 0 }}
                  transition={{ duration: 0.8 }} className="px-4 py-5 sm:p-6">
          <h2 className="text-center font-bold text-3xl md:text-4xl text-gray-900 mb-8">
            Admission Form
          </h2>
          <form  onSubmit={handleSubmit} className="space-y-6">
            <div  className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Enter your name",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  name: "guardianname",
                  label: "Guardian Name",
                  type: "text",
                  placeholder: "Enter guardian's name",
                },
                {
                  name: "standard",
                  label: "Standard",
                  type: "number",
                  placeholder: "Enter your standard",
                  min: "1",
                  max: "12",
                },
                {
                  name: "bloodgroup",
                  label: "Blood Group",
                  type: "text",
                  placeholder: "Enter your blood group",
                },
                {
                  name: "contact",
                  label: "Contact Number",
                  type: "tel",
                  placeholder: "Enter your contact number",
                },
                {
                  name: "alternatecontact",
                  label: "Alternate Contact",
                  type: "tel",
                  placeholder: "Enter alternate contact",
                },
                {
                  name: "address",
                  label: "Address",
                  type: "text",
                  placeholder: "Enter your address",
                },
                {
                  name: "pincode",
                  label: "Pincode",
                  type: "number",
                  placeholder: "Enter your pincode",
                },
                {
                  name: "hobby",
                  label: "Hobby",
                  type: "text",
                  placeholder: "Enter your hobby",
                },
                { name: "dob", label: "Date of Birth", type: "date" },
                {
                  name: "schoolname",
                  label: "School Name",
                  type: "text",
                  placeholder: "Enter your school name",
                },
              ].map((field) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    min={field.min}
                    max={field.max}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </motion.div>
              ))}
            </div>
            <div>
              <label
                htmlFor="profile"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Photo <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="profile"
                name="profile"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading ? (
                  <ScaleLoader color="#ffffff" height={21} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
