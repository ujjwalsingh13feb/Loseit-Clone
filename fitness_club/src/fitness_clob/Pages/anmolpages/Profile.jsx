import { Box, Image } from "@chakra-ui/react";
import React from "react";
import data from "../../alldata/db.json";
import Styles from "../../css/Profile.module.css";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

import Activity from "./Activity";
const Profile = ({ toggle }) => {
  const { personimage, userdetails, send, status } = data;
  console.log("i am a send", send);
  return (
    <div>
      <Box className={Styles.flex}>
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
              {status.map((data) => (
                <Box className={Styles.allbadge} key={data.badges}>{data.badges}</Box>
              ))}
            </Box>
            <Activity />
          </Box>
          <Box className={Styles.usercal}></Box>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
