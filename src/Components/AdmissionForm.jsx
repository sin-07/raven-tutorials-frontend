import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AdmissionForm = () => {
  const [image, setImage] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const guardianName = e.target.guardianName.value;
      const standard = e.target.standard.value;
      const bloodGroup = e.target.bloodGroup.value;
      const contact = e.target.contact.value;
      const alternateContact = e.target.alternateContact.value;
      const address = e.target.address.value;
      const pincode = e.target.pincode.value;
      const hobby = e.target.hobby.value;
      const dob = e.target.dob.value;
      const schoolName = e.target.schoolName.value;

      if(!name || !email || !guardianName || !standard || !bloodGroup || !contact || !alternateContact || !address || !pincode || !hobby || !dob || !schoolName || !image){
        toast.error("Please fill all the fields");
      }else
      if(name.trim===""|| email.trim==="" || guardianName.trim==="" || standard.trim==="" || bloodGroup.trim==="" || contact.trim==="" || alternateContact.trim==="" || address.trim==="" || pincode.trim==="" || hobby.trim==="" || dob.trim==="" || schoolName.trim===""){
        toast.error("Please fill all the fields");
      }else
      if (
        name.length < 3 || (!email.includes("@") && !email.includes(".")) || pincode.length!==6
      ) {
        return toast.error("Invalid input");
      }
      
      
    } catch (error) {
      console.log(error.message);
      
    }
  };


  const handleImageChange=(e)=>{
    const file = e.target.files[0];
    if (file.size>1000000) {
      toast.error("File size should be less than 1MB");
    }else{
      setImage(file);
    }
  }
  
  

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
              <label htmlFor="guardianName" className="block font-medium mb-1">
                Guardian Name <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your guardian name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="standard" className="block font-medium mb-1">
                Standard <span className="text-red-500 font-bold text-lg">*</span>
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
              <label htmlFor="bloodGroup" className="block font-medium mb-1">
                Blood Group <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your blood group"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block font-medium mb-1">
                Contact Number <span className="text-red-500 font-bold text-lg">*</span>
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
                htmlFor="alternateContact"
                className="block font-medium mb-1"
              >
                Alternate Contact Number <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="number"
                id="alternateContact"
                name="alternateContact"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your alternate contact number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-medium mb-1">
                Address <span className="text-red-500 font-bold text-lg">*</span>
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
                Pincode <span className="text-red-500 font-bold text-lg">*</span>
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
                Date of Birth <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="schoolName" className="block font-medium mb-1">
                School Name <span className="text-red-500 font-bold text-lg">*</span>
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                className="w-full p-2 rounded-lg outline-none shadow-md bg-slate-200 focus-within:bg-white duration-200"
                placeholder="Enter your school name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profile" className="block font-medium mb-1">
                Upload Photo <span className="text-red-500 font-bold text-lg">*</span>
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
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
