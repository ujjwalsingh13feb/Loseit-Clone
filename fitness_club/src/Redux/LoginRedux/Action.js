import {LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./Action.type"
import axios from 'axios'

export const login=(payload)=>async(dispatch)=>{
   dispatch({type:LOGIN_LOADING})
   
   

   try{
    let res=  await axios.post("https://fitness-club-server.onrender.com/login",payload)
   // if(r.data.token)
   dispatch({type:LOGIN_SUCCESS,payload:res.data})
   }catch(e){
      {alert("Invalid credentials")
   dispatch({type:LOGIN_ERROR})}
   }
}



export const logout=()=>(dispatch)=>{
   console.log("Logout")
   dispatch({type:LOGOUT_SUCCESS})
}
