import React, { useState } from 'react'
import Styles from "../../css/Profile.module.css";
import {Box} from "@chakra-ui/react";
import Styles1 from "../../css/activity.module.css";
const Friends = () => {
  const [profile, setprofile] = useState(true);
  const [data1, setData] = useState(true);
  return (
    <div>
      <Box className={Styles.usertodo}>
            <Box className={Styles.badge}>
              <Box
                className={Styles.allbadge}
                onClick={() => setData(data1 === true ? false : true)}
              >
                Search
              </Box>
              <Box
                className={Styles.allbadge}
                onClick={() => {
                  setprofile(profile === false ? true : false);
                  setData(false);
                }}
              >
                Invite
              </Box>
              <Box className={Styles.allbadge}>Advance search</Box>

            </Box>
            {/* {data1 ? <Activity /> : <Userprofile/>} */}
<Box className={Styles1.comment}>Search for friend by email address</Box>  
<Box><input type="text" className={Styles.inn} placeholder="Email Address" style={{width:"70%",padding:"5px"}}/>
<button className={Styles.button1}>Find</button>
</Box>    
<h5 className={Styles1.comment} style={{fontSize:"12px",color:"grey"}}>Do you know someone who would like to try Lose It!?</h5>     
          </Box>
          
    </div>
  )
}

export default Friends
