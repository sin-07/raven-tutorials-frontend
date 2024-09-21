import React, { useState } from 'react'

const AdmissionForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [guardianName, setGuardianName] = useState('')
    const [standard, setStandard] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [contact, setContact] = useState('')
    const [alternateContact, setAlternateContact] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [hobby, setHobby] = useState('')
    const [dob, setDob] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [photo, setPhoto] = useState('')
    
    
    
  return (
    <>
      <Toaster />
      <div className="container md:px-0 px-1 md:mx-auto my-8 ">
        
        <form action="post" onSubmit={handleSubmit}>
          <h2 className="text-[2rem] font-bold mb-4 sm:text-left text-center">
            Admission Form
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className={` w-full border ${
                  error.name ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.name}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.email ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.email}</span>
            </div>

            <div className="mb-4">
              <label htmlFor="guardianName" className="block font-medium mb-1">
                Guardian Name
              </label>
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                value={userData.guardianName}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.guardianName ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.guardianName}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="standard" className="block font-medium mb-1">
                Standard
              </label>
              <input
                type="number"
                id="standard"
                name="standard"
                min="1"
                max="12"
                value={userData.standard}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.standard ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.standard}</span>
            </div>

            <div className="mb-4">
              <label htmlFor="bloodGroup" className="block font-medium mb-1">
                Blood Group
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                value={userData.bloodGroup}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.bloodGroup ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.bloodGroup}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block font-medium mb-1">
                Contact Number
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                value={userData.contact}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.contact ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.contact}</span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="alternateContact"
                className="block font-medium mb-1"
              >
                Alternate Contact Number
              </label>
              <input
                type="number"
                id="alternateContact"
                name="alternateContact"
                value={userData.alternateContact}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.alternateContact ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.alternateContact}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.address ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.address}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="pincode" className="block font-medium mb-1">
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={userData.pincode}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.pincode ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.pincode}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="hobby" className="block font-medium mb-1">
                Hobby
              </label>
              <input
                type="text"
                id="hobby"
                name="hobby"
                value={userData.hobby}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.hobby ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.hobby}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={userData.dob}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.dob ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.dob}</span>
            </div>

            <div className="mb-4">
              <label htmlFor="schoolName" className="block font-medium mb-1">
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={userData.schoolName}
                onChange={handleChange}
                className={`form-input w-full border ${
                  error.schoolName ? "border-red-500" : ""
                }`}
              />
              <span style={{ color: "red" }}>{error.schoolName}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block font-medium mb-1">
                Upload Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                // accept="image/*"
                onChange={handleChange}
                className="form-input w-full border"
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
  )
}

export default AdmissionForm