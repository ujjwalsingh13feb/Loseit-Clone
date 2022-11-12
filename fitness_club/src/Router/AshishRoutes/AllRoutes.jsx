import { Route, Routes } from "react-router-dom";
import Navbar from "../../Components/AshishComp/Navbar";

import SingleFood from "../../Components/AshishComp/SingleFood";
import Sidebar from "../../fitness_clob/components/anmolcomp/Sidebar";
import Profile from "../../fitness_clob/Pages/anmolpages/Profile";
import AddExercise from "../../Pages/AshishPages/AddExercise";
import AddFood from "../../Pages/AshishPages/AddFood";


export default function AllRoutesAshish() {
    return (
        <Routes>
            <Route path="/addfood" element={<AddFood />} />
            <Route path="/addexercise" element={<AddExercise />} />
            <Route path="/singlefood/:id" element={<SingleFood />} />
            <Route path="/navbar" element={<Navbar/>} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/profile" element={<Profile/>} />
            
        </Routes>
    )
}