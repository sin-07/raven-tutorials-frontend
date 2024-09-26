import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useUpload } from "../hooks/useUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const AdmissionForm = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const guardianname = e.target.guardianname.value;
      const standard = e.target.standard.value;
      const bloodgroup = e.target.bloodgroup.value;
      const contact = e.target.contact.value;
      const alternatecontact = e.target.alternatecontact.value;
      const address = e.target.address.value;
      const pincode = e.target.pincode.value;
      const hobby = e.target.hobby.value;
      const dob = e.target.dob.value;
      const schoolname = e.target.schoolname.value;

      if (
        !name ||
        !email ||
        !guardianname ||
        !standard ||
        !bloodgroup ||
        !contact ||
        !alternatecontact ||
        !address ||
        !pincode ||
        !hobby ||
        !dob ||
        !schoolname ||
        !image
      ) {
        toast.error("Please fill all the fields");
        setLoading(true);
      } else if (
        name.trim === "" ||
        email.trim === "" ||
        guardianname.trim === "" ||
        standard.trim === "" ||
        bloodgroup.trim === "" ||
        contact.trim === "" ||
        alternatecontact.trim === "" ||
        address.trim === "" ||
        pincode.trim === "" ||
        hobby.trim === "" ||
        dob.trim === "" ||
        schoolname.trim === ""
      ) {
        toast.error("Please fill all the fields");
      } else if (
        name.length < 3 ||
        (!email.includes("@") && !email.includes(".")) ||
        pincode.length !== 6
      ) {
        return toast.error("Invalid input");
      } else if (contact.length !== 10 || alternatecontact.length !== 10) {
        return toast.error("Contacts must be in 10 digits");
      } else if (standard < 1 || standard > 12) {
        return toast.error("Standard must be between 1 to 12");
      } else if (contact === alternatecontact) {
        return toast.error("Contact and Alternate Contact must be different");
      } else {
        const { url, public_id } = await useUpload({ image });
        if (!url || !public_id) {
          return toast.error("Failed to upload image");
        } else {
          setLoading(true);
          const res = await axios.post(
            "https://raven-tutorials-backend-y1pc.onrender.com/form",
            {
              name,
              email,
              guardianname,
              standard,
              bloodgroup,
              contact,
              alternatecontact,
              address,
              pincode,
              hobby,
              dob,
              schoolname,
              profile: url,
              publicId: public_id,
            }
          );
          // console.log(res);
          const data = await res.data;
          if (!data) {
            return toast.error("Failed to register");
          } else {
            toast.success("Student registered successfully");
            e.target.reset();
            // setTimeout(()=>{

            // })
            navigate("/submit-successfully");
          }
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
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
    <>
      <Toaster />
      <div className="bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[80%] mx-auto bg-[#f3f4f6] md:px-8 px-4"
        >
          <h2 className="text-center font-bold md:text-4xl text-2xl py-4">
            Admission Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="guardianname" className="block font-medium mb-1">
                Guardian Name{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="guardianname"
                name="guardianname"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your guardian name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="standard" className="block font-medium mb-1">
                Standard{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="number"
                id="standard"
                name="standard"
                min="1"
                max="12"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your standard"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bloodgroup" className="block font-medium mb-1">
                Blood Group{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="bloodgroup"
                name="bloodgroup"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your blood group"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block font-medium mb-1">
                Contact Number{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="alternatecontact"
                className="block font-medium mb-1"
              >
                Alternate Contact Number{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="number"
                id="alternatecontact"
                name="alternatecontact"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your alternate contact number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-medium mb-1">
                Address{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pincode" className="block font-medium mb-1">
                Pincode{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your pincode"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hobby" className="block font-medium mb-1">
                Hobby <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="hobby"
                name="hobby"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your hobby"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-medium mb-1">
                Date of Birth{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="schoolname" className="block font-medium mb-1">
                School Name{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="schoolname"
                name="schoolname"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your school name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profile" className="block font-medium mb-1">
                Upload Photo{" "}
                <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="file"
                id="profile"
                name="profile"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
              />
            </div>
            <div className="mt-4 text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mb-2 rounded hover:bg-blue-600 md:w-[40%] w-full"
              >
                {loading ? (
                  <>
                    <ScaleLoader color="#ffffff" />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
