<<<<<<< HEAD
import Sidebar from "./fitness_clob/components/anmolcomp/Sidebar";
import "./App.css";
import AllRoutes from "./fitness_clob/Allroutes/AllRoutes";
import Friends from "./fitness_clob/Pages/anmolpages/Friends";
import Profile from "./fitness_clob/Pages/anmolpages/Profile";
function toggle(){
=======

import './App.css';
import S_AllRoutes from './Router/ShubhamRoutes/S_AllRoutes';
import AllRoutes from './Router/UjjwalRoutes/AllRoutes';



>>>>>>> 17a9de3f82d83f921ae3d1887bfc8acf687b2039

}
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
       <AllRoutes />
    {/* {state? <Profile toggle={toggleState}/> :<Sidebar />} */} 
    <Sidebar/>
    {/* <Profile/> */}
    {/* <Friends/> */}
=======
      <AllRoutes/>
      <S_AllRoutes/>
>>>>>>> 17a9de3f82d83f921ae3d1887bfc8acf687b2039
    </div>
  );
}

export default App;
