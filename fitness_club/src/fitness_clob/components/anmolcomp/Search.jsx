import React from 'react'
import {Box, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import Styles1 from "../../css/activity.module.css";
import Styles from "../../css/Profile.module.css";
const Search = () => {
  return (
    <div >
      <Box className={Styles1.comment}>Search for friend by email address</Box>  
<Box><input type="text" className={Styles.inn} placeholder="Email Address" style={{width:"70%",padding:"5px"}}/>
<button className={Styles.button1}>Find</button>
</Box>    
<h5 className={Styles1.comment} style={{fontSize:"12px",color:"grey"}}>Do you know someone who would like to try Lose It!?</h5>

    </div>
  )
}

export default Search
