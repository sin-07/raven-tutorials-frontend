import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function GettingUsers() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail !== 'aniket.singh9322@gmail.com') {
          navigate('/profile');
          return;
        }

        const response = await axios.get(
          "https://raven-tutorials-backend-y1pc.onrender.com/getusers"
        );
        setStudents(response.data.user || []);
      } catch (error) {
        setError("Failed to fetch students. Please try again later.");
      }
    };

    fetchStudents();
  }, [navigate]);

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`https://raven-tutorials-backend-y1pc.onrender.com/delete-user/${id}`);
      if (res.status === 200) {
        toast.success("Data deleted successfully");
        setStudents(students.filter(student => student._id !== id));
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <>
      <Toaster />
      <div>
        {students.length > 0 ? (
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
                    <th className="py-2 px-4 border-b"></th>
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
                      <td className="py-2 px-4 border-b">
                        {student.guardianname}
                      </td>
                      <td className="py-2 px-4 border-b">{student.standard}</td>
                      <td className="py-2 px-4 border-b">
                        {student.bloodgroup}
                      </td>
                      <td className="py-2 px-4 border-b">{student.contact}</td>
                      <td className="py-2 px-4 border-b">
                        {student.alternatecontact}
                      </td>
                      <td className="py-2 px-4 border-b">{student.address}</td>
                      <td className="py-2 px-4 border-b">{student.pincode}</td>
                      <td className="py-2 px-4 border-b">{student.hobby}</td>
                      <td className="py-2 px-4 border-b">{student.dob}</td>
                      <td className="py-2 px-4 border-b">
                        {student.schoolname}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <AiFillDelete
                          onClick={() => {
                            deleteUser(student._id);
                          }}
                          className="text-gray-500 text-xl hover:text-red-400 cursor-pointer hover:scale-110 transition-all"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="h-[70vh] flex items-center justify-center">
            <h1 className="text-center p-4 font-extrabold md:text-6xl text-3xl text-gray-400">
              No data found....
            </h1>
          </div>
        )}
      </div>
    </>
  );
}