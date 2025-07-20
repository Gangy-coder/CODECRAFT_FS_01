import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'


function Navbar() {

    const navigate = useNavigate()
    const { backendUrl, setUserData, isLoggedin, setIsLoggedin } = useContext(AppContext)
    const handleLogout = async () => {
        try {
            const res = await axios.post(`${backendUrl}/api/auth/logout`)
            console.log(res)
            if (res.data.success) {
                setIsLoggedin(false)
                setUserData(null)
                navigate('/auth');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>

            <img src={assets.logo} alt="" className='w-28 sm:w-32' />

            <button onClick={() => navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>Login <img src={assets.arrow_icon} alt="" /></button>

            <button
                onClick={() => navigate('/admin')}
                className='flex items-center gap-2 px-6 py-2 text-sm rounded-full text-white hover:scale-105 transition-transform duration-200 shadow'
            >
                admin route
                {/* <img src={assets.arrow_icon} alt="Arrow" className='w-4 h-4' /> */}
            </button>

            {isLoggedin && <button
                onClick={handleLogout}
                className='flex items-center gap-2 px-6 py-2 text-sm rounded-full text-white bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform duration-200 shadow'
            >
                Logout
                <img src={assets.arrow_icon} alt="Arrow" className='w-4 h-4' />
                </button>}

            </div>
    )
}

            export default Navbar