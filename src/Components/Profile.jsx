import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useUpload } from '../hooks/useUpload';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        if (!email) {
          navigate('/login');
          return;
        }
        const response = await axios.get(`https://raven-tutorials-backend-y1pc.onrender.com/user/${email}`);
        setUserData(response.data.user);
      } catch (error) {
        toast.error('Failed to fetch user data');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1000000) {
      toast.error('File size should be less than 1MB');
    } else {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = userData.profile;
      let publicId = userData.publicId;

      if (image) {
        const uploadResult = await useUpload({ image });
        imageUrl = uploadResult.url;
        publicId = uploadResult.public_id;
      }

      const response = await axios.put(`https://raven-tutorials-backend-y1pc.onrender.com/update-user/${userData._id}`, {
        ...userData,
        profile: imageUrl,
        publicId: publicId,
      });

      if (response.data.success) {
        toast.success('Profile updated successfully');
        setIsEditing(false);
        setUserData(response.data.user);
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred while updating the profile');
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-10">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-center font-bold text-3xl md:text-4xl text-gray-900 mb-8">
            User Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {Object.entries(userData).map(([key, value]) => {
                if (key === '_id' || key === '__v' || key === 'publicId') return null;
                return (
                  <div key={key}>
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    {key === 'profile' ? (
                      <div>
                        <img src={value} alt="Profile" className="w-32 h-32 object-cover rounded-full mb-2" />
                        {isEditing && (
                          <input
                            type="file"
                            onChange={handleImageChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        )}
                      </div>
                    ) : (
                      <input
                        type={key === 'dob' ? 'date' : 'text'}
                        name={key}
                        id={key}
                        value={value}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end space-x-4">
              {isEditing ? (
                <>
                  <button
                    type="submit"
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleEdit}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}