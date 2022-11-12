import React, { useState } from 'react'
import Styles from "../../css/Profile.module.css";
import {Box} from "@chakra-ui/react";
import Styles1 from "../../css/activity.module.css";
import Search from '../../components/anmolcomp/Search';
import Advancesearch from '../../components/anmolcomp/Advancesearch';
const Friends = () => {
  
  const [profile, setprofile] = useState(false);
  const [data1, setData] = useState(true);
  console.log("i am friend data",data1)
  return (
    <div>
      <Box className={Styles.usertodo} style={{width:"80%"}}>
            <Box className={Styles.badge} >
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
              <Box className={Styles.allbadge}
              onClick={() => {
                setprofile(profile === false ? true : false);
                setData(false);
              }}
              >Advance search</Box>

            </Box>
            {/* {data1 ? <Activity /> : <Userprofile/>} */}
{data1===true?<Search/>:<Advancesearch/>}  
          </Box>
          
    </div>
  )
}

export default Friends
