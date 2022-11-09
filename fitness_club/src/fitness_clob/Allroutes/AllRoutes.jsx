import React from "react";
import Activity from "../Pages/anmolpages/Activity";
import Addfriend from "../Pages/anmolpages/Addfriend";
import Find from "../Pages/anmolpages/Find";
import Friends from "../Pages/anmolpages/Friends";
import Invitations from "../Pages/anmolpages/Invitations";
import Posts from "../Pages/anmolpages/Posts";
import Profile from "../Pages/anmolpages/Profile";
import { Routes, Route } from "react-router-dom";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/activity" element={<Activity />}></Route> */}
        {/* <Route path="/Addfriend" element={<Addfriend />}></Route>
        <Route path="/find" element={<Find />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/invitation" element={<Invitations />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/profile" element={<Profile />}></Route> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
