import { Box, Img, StylesProvider } from "@chakra-ui/react";
import React from "react";
import axios from "axios"
import data from "../alldata/comment.json";
import Styles from "../css/Profile.module.css";
import { useEffect } from "react";
import { useState } from "react";

const Userprofile = () => {
  const [response,setResponse]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
getdata()
  },[])
  async function getdata(){
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    let response=await axios.get("https://fitness-club-server.onrender.com/login");
    let data=response.data;
    console.log("length",data[data.length-1])
    setResponse(data)
  }
  console.log("userdara",response)
  const { userinfo } = data;
  // console.log("i am user info", userinfo);
  if(loading===true){
    return <h1 style={{textAlign:"center"}}>Loading...</h1>
  }
  return (
    <Box display="flex">

    <div>
      {userinfo.map((items) => (
        <Box key={items.details} className={Styles.userprofile}>
          {items.details}
        </Box>
      ))}
    </div>
    <Box  ml="25px">
    <Box className={Styles.details}>{response[response.length-1][0].location}</Box>
    <Box className={Styles.details}>{response[response.length-1][0].email}</Box>
    <Box className={Styles.details}>{response[response.length-1][0].password}</Box>
    <Box className={Styles.details}>{response[response.length-1][0].location}</Box>
    <Box className={Styles.details}>9805580258</Box>
    <Box className={Styles.details}>{response[response.length-1][0].age}</Box>
    <Box className={Styles.details}>Software Developer</Box>
    <Box className={Styles.details} display="flex"><Img src="https://d3hsih69yn4d89.cloudfront.net/web/BD7D22DA3B224171A079CF8A8A5707A6.cache.png" height="23px"/>Strawberry Skydive 123 g</Box>
    <Box className={Styles.details} display="flex"><Img src="https://d3hsih69yn4d89.cloudfront.net/web/7D498E94ED2574BDD8308C972A1856D1.cache.png" height="23px"/>	Abdominal Crunches</Box>
    </Box>


      </Box>
  );
};

export default Userprofile;
