import Sidebar from "./fitness_clob/components/anmolcomp/Sidebar";
import "./App.css";
import AllRoutes from "./fitness_clob/Allroutes/AllRoutes";
import Friends from "./fitness_clob/Pages/anmolpages/Friends";
import Profile from "./fitness_clob/Pages/anmolpages/Profile";
function toggle(){

}
function App() {
  return (
    <div className="App">
       <AllRoutes />
    {/* {state? <Profile toggle={toggleState}/> :<Sidebar />} */} 
    <Sidebar/>
    {/* <Profile/> */}
    {/* <Friends/> */}
    </div>
  );
}

export default App;
