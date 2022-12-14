import { Box, Img, Select, Stack } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import Styles from "../../css/Profile.module.css";
import Styles1 from "../../css/activity.module.css";
import { useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { ImCheckmark } from "react-icons/im";
import data1 from "../../alldata/comment.json";
const Advancesearch = () => {
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState(false);
  const { addfriend } = data1;
  console.log("i am add friend", addfriend);
  async function getdata() {
    let response = await axios.get("https://hub.dummyapis.com/vj/Kmw8lBF");
    let data1 = await response.data[0].data;
    setData(data1);
  }
return (
    <>
      <div className={Styles1.flex}>
        <Box>
          <div
            className={Styles1.c}
            style={{
              fontSize: "12px",
              color: "grey",
            }}
          >
            <Box>Gender</Box>
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <input type="radio" name="gender" value="female" /> Either
          </div>
          <Box
            className={Styles1.c}
            style={{
              fontSize: "12px",
              color: "grey",

              marginTop: "40px",
            }}
          >
            <Box>Goal</Box>
            <Stack spacing={3} mt="10px">
              <Select
                placeholder="Any wait"
                size="lg"
                color="black"
                fontSize="15px"
              >
                <option value="option1">Maintain</option>
                <option value="option2">Lose between 1 and 9 pounds</option>
                <option value="option3">Lose between 5 and 10 pounds</option>
                <option value="option3">Lose between 10 and 15 pounds</option>
                <option value="option3">Lose between 2 and 18 pounds</option>
                <option value="option3">Lose between 2 and 3 pounds</option>
                <option value="option3">Lose between 4 and 7 pounds</option>
              </Select>
            </Stack>
          </Box>
        </Box>
        <Box>
          <Box
            className={Styles1.c}
            style={{
              fontSize: "12px",
              color: "grey",
              // border: "1px solid black",
              marginTop: "40px",
            }}
          >
            <Box>Age</Box>
            <Stack spacing={3} mt="10px">
              <Select placeholder="Any age" size="lg" fontSize="15px">
                <option value="option1">10 to 15 years</option>
                <option value="option2">18 to 24 years</option>
                <option value="option3">28 to 34 years</option>
                <option value="option3">15 to 20 years</option>
                <option value="option3">12 to 24 years</option>
                <option value="option3">45 to 55 years</option>
                <option value="option3">50 to 60 years</option>
              </Select>
            </Stack>
          </Box>

          <Box
            className={Styles1.c}
            style={{
              fontSize: "12px",
              color: "grey",

              marginTop: "40px",
            }}
          >
            <Box>Exercise</Box>
            <Stack spacing={3} mt="10px" display="flex">
              <Select placeholder="Any Exercise" size="lg" fontSize="15px">
                <option value="option1">10 to 15 years</option>
                <option value="option2">18 to 24 years</option>
                <option value="option3">28 to 34 years</option>
                <option value="option3">15 to 20 years</option>
                <option value="option3">12 to 24 years</option>
                <option value="option3">45 to 55 years</option>
                <option value="option3">50 to 60 years</option>
              </Select>
              <button className={Styles.button1} onClick={() => getdata()}>
                Find
              </button>
            </Stack>
          </Box>
        </Box>
      </div>
      <Box ml="30px">
        {data.map((item) => (
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <Box className={Styles.names}>
                <Img src={item.img} />
              </Box>
              <Box className={Styles.names} ml="15px">
                {item.name}
              </Box>
            </Box>
            <Box display="flex">
              <Box mt="20px" mr="20px" onClick={() => setIcon(true)}>
                {icon === false ? <TiPlusOutline /> : <ImCheckmark />}
              </Box>
              <span className={Styles.names}>
                <span>{addfriend.friend}Add Friend</span>
              </span>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Advancesearch;
