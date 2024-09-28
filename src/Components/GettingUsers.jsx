"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Component() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getusers");
        console.log(response.data);
        setStudents(response.data.user || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setError("Failed to fetch students. Please try again later.");
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto py-24 px-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Student Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Profile</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Guardian Name</th>
              <th className="py-2 px-4 border-b">Standard</th>
              <th className="py-2 px-4 border-b">Blood Group</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">Alternate Contact</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Pincode</th>
              <th className="py-2 px-4 border-b">Hobby</th>
              <th className="py-2 px-4 border-b">DOB</th>
              <th className="py-2 px-4 border-b">School Name</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b">
                  <img
                    src={student.profile}
                    alt={student.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.email}</td>
                <td className="py-2 px-4 border-b">{student.guardianname}</td>
                <td className="py-2 px-4 border-b">{student.standard}</td>
                <td className="py-2 px-4 border-b">{student.bloodgroup}</td>
                <td className="py-2 px-4 border-b">{student.contact}</td>
                <td className="py-2 px-4 border-b">
                  {student.alternatecontact}
                </td>
                <td className="py-2 px-4 border-b">{student.address}</td>
                <td className="py-2 px-4 border-b">{student.pincode}</td>
                <td className="py-2 px-4 border-b">{student.hobby}</td>
                <td className="py-2 px-4 border-b">{student.dob}</td>
                <td className="py-2 px-4 border-b">{student.schoolname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
