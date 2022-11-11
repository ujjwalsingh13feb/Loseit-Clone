import { Box, StylesProvider } from "@chakra-ui/react";
import React from "react";
import data from "../alldata/comment.json";
import Styles from "../css/Profile.module.css";
const Userprofile = () => {
  const { userinfo } = data;
  console.log("i am user info", userinfo);
  return (
    <div>
      {userinfo.map((items) => (
        <Box key={items.details} className={Styles.userprofile}>
          {items.details}
        </Box>
      ))}
    </div>
  );
};

export default Userprofile;
