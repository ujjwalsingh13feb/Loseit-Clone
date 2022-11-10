
import { Routes, Route } from "react-router-dom";


import Question from './../../Pages/Question/Question';
import Weight from './../../Pages/Weight/Weight';
import HomePage from './../../Components/HomePage/HomePage';
import Height from "./../../Pages/Height/Height";
import Gender from './../../Pages/Gender/Gender';
import Birthday from './../../Pages/Birthday/Birthday';
import Plan from './../../Pages/Plan/Plan';
import Signup from './../../Pages/Signup';



export default function AllRoutes() {
    return (
     <Routes>
      <Route path="/" element={<HomePage/>}/>
         <Route path="/question" element={<Question/>}/>
         <Route path="/weight" element={<Weight/>}/>
         <Route path="/height" element={<Height/>}/>
         <Route path="/gender" element={<Gender/>}/>
         <Route path="/birthday" element={<Birthday/>}/>
         <Route path="/plan" element={<Plan/>}/>
         <Route path="/signup" element={<Signup/>}/>
     </Routes> 
    )
}