import Sidebar from "./fitness_clob/components/anmolcomp/Sidebar";
import "./App.css";
import AllRoutes from "./fitness_clob/Allroutes/AllRoutes";
import { useState } from "react";
import Profile from "./fitness_clob/Pages/anmolpages/Profile";
function App() {
  const [state,setState]=useState(false)
  function toggleState(){
    setState(true)
  }
  return (
    <div className="App">
      {/* <AllRoutes />
    {state? <Profile toggle={toggleState}/> :<Sidebar />} */}
    <Sidebar/>
    {/* <Profile/> */}
    </div>
  );
}

export default App;
