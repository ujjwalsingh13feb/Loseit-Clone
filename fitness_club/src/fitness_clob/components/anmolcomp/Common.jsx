import React, { useState } from 'react'
import {Box} from "@chakra-ui/react"
import Styles from "../../css/Profile.module.css";
import Activity from "../../Pages/anmolpages/Activity";
import Userprofile from "../Userprofile"
const Common = () => {
    const [profile, setprofile] = useState(false);
const [data1, setData] = useState(true);
  return (

      <Box className={Styles.usertodo}>
<Box className={Styles.badge}>
  <Box
    className={Styles.allbadge}
    onClick={() => setData(data1 === true ? false : true)}
  >
    Status
  </Box>
  <Box
    className={Styles.allbadge}
    onClick={() => {
      // setprofile(profile === false ? true : false);
      setData(false);
    }}
  >
    Profile
  </Box>
  <Box className={Styles.allbadge}>Badges</Box>
</Box>
{data1 == true ? <Activity /> : <Userprofile />}
{/* {profile ? <Userprofile /> : null} */}
</Box>
   
  )
}

export default Common
