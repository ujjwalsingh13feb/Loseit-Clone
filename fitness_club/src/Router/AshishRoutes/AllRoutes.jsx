import { Route, Routes } from "react-router-dom";

import SingleFood from "../../Components/AshishComp/SingleFood";
import AddExercise from "../../Pages/AshishPages/AddExercise";
import AddFood from "../../Pages/AshishPages/AddFood";


export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/addfood" element={<AddFood />} />
            <Route path="/addexercise" element={<AddExercise />} />
            <Route path="/singlefood/:id" element={<SingleFood />} />
        </Routes>
    )
}