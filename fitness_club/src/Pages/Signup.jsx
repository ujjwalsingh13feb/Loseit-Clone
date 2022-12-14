import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";


// Formula used to calculate men's calorie needs is = 66.5 + 13.8 x (body weight in kilograms) 
// + 5 x (body height in cm) - by 6.8 x age.
// Wh_H={hUnit: "cm", height: "171", gender: "male", age: "25"}
// Wh_U{curWeight: "70", goalWeight: "63", unit: "kg"}



let Total_H= JSON.parse(localStorage.getItem("weightH"));
let Total_W = JSON.parse(localStorage.getItem("weightU"));
// console.log(Total_H,Total_W)


const Signup = () => {

  // const [caloriesTotal, setCaloriesTotal]=useState(0);
  const sum = (66.5+ 13.8*(+Total_W.curWeight)+5*(+Total_H.height)-6.8*(Total_H.age))
  // console.log(sum*1.2)
//   setCaloriesTotal(sum*1.4)
// console.log(caloriesTotal)

  const [signup, setSignup] = useState({
    email: "",
    password: "",
    age:"",
    location: "",
    caloriesTotal:sum*1.4,
    
  });
  const [state, setState] = useState("Signup");
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // setSignup({...signup,caloriesTotal:sum*1.4})
    console.log(signup);
  };
  // https://fitness-club-server.onrender.com/signup"
  const handleClick = () => {
    if (signup.email && signup.password) {
      setState("Loading...");

      return axios
        .post("https://fitness-club-server.onrender.com/signup", signup)
        .then(() => {
          alert("Signup Successfull");
        })
        .then(() => {
          navigate("/login");
          // console.log(signup)
        })
        .catch(() => {
          alert("SignUp Failed Try Again!!!");
        });
      } else {
        alert("No data is found , please write data")
    
    }

    // setTimeout(() => {
    //   setState("Signup");
    // }, 2000);
     
    

  };
  return (
    <Container>
      <IMGContainer />
      <InsideContainer>
        <Box1>
          <Heading>Create an account to save your plan</Heading>
        </Box1>
        <Box2>
          <InputBox
            placeholder="Your Name"
            name="username"
            required
            // onChange={(e) => {
            //   onChangeInput(e);
            // }}
          />
        </Box2>
        <Box2>
          <InputBox
            placeholder="Email"
            name="email"
            required
            type="email"
            onChange={onChangeInput}
          />
        </Box2>
        <Box2>
          <InputBox
            placeholder="Password"
            type="password"
            name="password"
            onChange={onChangeInput}
            required
          />
        </Box2>
        <Box2>
          <InputBox
            placeholder="age"
            type="number"
            name="age"
            onChange={onChangeInput}
            required
          />
        </Box2>
        <Box2>
        <InputBox
            placeholder="Location"
            type="string"
            name="location"
            onChange={onChangeInput}
            required
          />
        </Box2>

        <ButtonBox onClick={handleClick}>{state}</ButtonBox>
      </InsideContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 99.7%;
  height: 100vh;
  /* border: 3px solid black; */
  margin-top: 0px;
  position: relative;
`;

const IMGContainer = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url("https://assets.loseit.com/website/onboarding/Wave.svg");
  object-fit: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 0;
  background-position: bottom center;
`;

const InsideContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 410px;
  margin-left: 70px;
  display: flex;
  /* border: 2px solid black; */
  width: 35%;
  height: 600px;
  display: flex;
  flex-direction: column;
  /* z-index: 100; */
  background-color: whitesmoke;
`;

const Heading = styled.div`
  flex: 1;
  color: #173962;
  font-size: 29px;
  font-weight: 900;
  padding: 20px 0;
  text-align: center;
`;

const Box1 = styled.div`
  flex: 1;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
`;
const Box2 = styled.div`
  flex: 0.5;
  width: 50%;
  margin: auto;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  align-items: center;
  text-align: center;
  padding: 12px 10px;
`;

const ButtonBox = styled.button`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 12px 12px;
  background-color: #f7941d;
  z-index: 1.4;
  width: 20%;
  font-size: 20px;
  /* font-weight: 600; */
  margin: auto;
  color: #173962;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;
export default Signup;
