import React from 'react'
import Styles from "../../css/activity.module.css";
import moment from 'moment';
import { Box } from '@chakra-ui/react';
const Backend = ({data,deletedata}) => {
    console.log("i am backend data",data)
  return (
    <div style={{marginTop:"15px"}}>
      {data.map((todos) => (
    <div key={todos.id} className={Styles.todos}>
      <div className={Styles.flexall}>
       <span><img src={todos.url} style={{height:"45px",width:"40px"}}/></span> <div className={Styles.name}>{todos.personname}</div>
        <div><span style={{color:"black",fontSize:"9pt",marginLeft:"5px",marginBottom:"5px"}}>:{todos.name}</span>
        <div style={{fontSize:"9pt"}} onClick={()=>deletedata(todos.id)} className={Styles.fixcolor}>Delete</div>
        </div>
        
      </div>
      
    </div>
  ))}
    </div>
  )
}

export default Backend
