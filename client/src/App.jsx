import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { Home } from './pages/Home';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import AdminRoute from './components/AdminRoutes';
import Admin from './pages/Admin';


export const App = () => {
 const {userData ,isLoggedin,} = useContext(AppContext);
 console.log(userData?.role)
 console.log(isLoggedin)
//  const isAdmin = userData.role==='admin';
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={isLoggedin?<Home/>:<Navigate to={'/auth'}/>} />
        <Route path='/auth' element={!isLoggedin?<Login />:<Navigate to={'/'}/>} />
        <Route path='/admin' element={
          <AdminRoute>
            <Admin/>
          </AdminRoute>
          } />

      </Routes>
    </div>
  )
}

export default App;