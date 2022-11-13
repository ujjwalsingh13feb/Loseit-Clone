import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './Components/AshishComp/Navbar';
import AllRoutesAshish from './Router/AshishRoutes/AllRoutes';
import S_AllRoutes from './Router/ShubhamRoutes/S_AllRoutes';
import AllRoutes from './Router/UjjwalRoutes/AllRoutes';
import FooterInside from "./Components/AshishComp/FooterInside"

function App() {
  const { isAuth, isLoading, error } = useSelector((state) => state.AuthReducer)
  if(isAuth){
    return (
      <div className="App">
        <Navbar/>
        <AllRoutesAshish/>
        <FooterInside/>
      </div>
    );
  }else{
    return (
      <div className="App">
        <AllRoutes/>
        <S_AllRoutes/>
        
      </div>
    );
  }
  
}

export default App;
