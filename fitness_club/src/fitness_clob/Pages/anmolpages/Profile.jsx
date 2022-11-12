import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Styles from "../../css/Profile.module.css";
import { TiArrowUpThick } from "react-icons/ti";
import StatisticsOfCalories from "../../../Components/AshishComp/StatisticsOfCalories"
import WeightUpdate from "../../../Components/AshishComp/WeightUpdate";
import { TiArrowDownThick } from "react-icons/ti";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import Userprofile from "../../components/Userprofile";
import data from "../../alldata/db.json";
import Activity from "./Activity";
const Profile = () => {
  const [profile, setprofile] = useState(true);
  const [data1, setData] = useState(true);
  const { personimage, userdetails, send, status } = data;
  console.log("i am a data1", data1);
  return (
    <div>
      <Box className={Styles.flex} mt="50px">
        <Box className={Styles.innerdiv}>
          <Box className={Styles.userdata}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="white"
              
            >
              <Box
                height="15px"
                width="50%"
                fontSize="9pt"
                className={Styles.community}
              >
                Community
              </Box>
              <Box
                height="15px"
                width="50%"
                fontSize="9pt"
                className={Styles.name}
              >
                . Anmol jagota
              </Box>
            </Box>
            <Box backgroundColor="white">
              <Image src={personimage[0].myimage} w="100%" mt="20px" />
              <Box backgroundColor="white">
                <span className={Styles.data}>{userdetails[0].name}</span>
                <br />
                <span className={Styles.data}>{userdetails[1].location}</span>
                <br />
                <span className={Styles.member}>{userdetails[2].member}</span>
              </Box>
            </Box>
            <Box mt="18px" className={Styles.main}>
              <Box className={Styles.kg}>
                <TiArrowUpThick /> 0 Kg
              </Box>
              <Box className={Styles.cals}>
                <TiArrowDownThick />
                <span className={Styles.calschild}>4,340 cals</span>
                <span className={Styles.calssecondchild}> this week</span>
              </Box>
              <Box>
                <span className={Styles.logeed1}>
                  <AiOutlineFileDone />
                  Last logged
                </span>
                <span className={Styles.logeed2}>:Today</span>
              </Box>
            </Box>
          <Box mt="20px" backgroundColor="white">
              {send.map((items) => (
                <Box key={items.email} mt="10px" fontSize="9pt">
                  <BiMessageDetail />
                  <span style={{ marginLeft: "10px" }} className={Styles.color}>
                    {items.email}
                  </span>
                </Box>
              ))}
            </Box>
          </Box>
          <Box className={Styles.usertodo}>
            <Box className={Styles.badge}>
              <Box
                className={Styles.allbadge}
                onClick={() => setData(true)}
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
            {data1 ? <Activity /> : <Userprofile/>}
            {/* {profile? <Userprofile/>:null} */}
          </Box>
          {data1===true?
          <Box className={Styles.usercal}>
            <StatisticsOfCalories/>
         
         <Box ml="40px"><WeightUpdate/>
         </Box> 
          </Box>
          :null}
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
