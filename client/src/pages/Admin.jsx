  import React from 'react';
import Navbar from '../components/Navbar';

const Admin = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white'>
      <Navbar />

      <div className='mt-32 w-full max-w-3xl px-6 text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-zinc-400'>
          Admin Dashboard
        </h1>

        <p className='text-lg sm:text-xl text-indigo-300 mb-6'>
          Welcome, Admin! Here's your overview and management panel.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-xl transition'>
            <h2 className='text-xl font-semibold text-indigo-400 mb-2'>
              User Management
            </h2>
            <p className='text-sm text-indigo-300'>
              View, block or delete users and manage roles.
            </p>
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-xl transition'>
            <h2 className='text-xl font-semibold text-indigo-400 mb-2'>
              Analytics
            </h2>
            <p className='text-sm text-indigo-300'>
              Monitor user activity and application stats.
            </p>
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-xl transition'>
            <h2 className='text-xl font-semibold text-indigo-400 mb-2'>
              Content Approval
            </h2>
            <p className='text-sm text-indigo-300'>
              Review and manage user-generated content.
            </p>
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-xl transition'>
            <h2 className='text-xl font-semibold text-indigo-400 mb-2'>
              Settings
            </h2>
            <p className='text-sm text-indigo-300'>
              Customize application preferences and configurations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
