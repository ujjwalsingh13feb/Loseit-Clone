import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import Question from "./Pages/Question/Question";
import Weight from "./Pages/Weight/Weight";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Routes>
         <Route path="/" element={<Question/>}/>
         <Route path="/weight" element={<Weight/>}/>
          </Routes> 
    </div>
  );
}

export default App;
