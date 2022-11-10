
import { Routes, Route } from "react-router-dom";


import Question from './../../Pages/Question/Question';
import Weight from './../../Pages/Weight/Weight';
import HomePage from './../../Components/HomePage/HomePage';


export default function AllRoutes() {
    return (
     <Routes>
      <Route path="/" element={<HomePage/>}/>
         <Route path="/question" element={<Question/>}/>
         <Route path="/weight" element={<Weight/>}/>
        </Routes> 
    )
}