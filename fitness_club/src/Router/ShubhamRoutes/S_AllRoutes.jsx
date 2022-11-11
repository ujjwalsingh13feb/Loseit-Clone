import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Login'



const S_AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}



export default S_AllRoutes