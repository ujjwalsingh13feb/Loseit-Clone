import React from "react";
import Profile from "../Pages/anmolpages/Profile";
import { Routes, Route } from "react-router-dom";
const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes> 
    </div>
  );
};

export default AllRoutes;
