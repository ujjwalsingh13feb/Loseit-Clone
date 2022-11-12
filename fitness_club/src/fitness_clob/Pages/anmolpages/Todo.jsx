import React, { useState } from "react";
import Styles from "../../css/activity.module.css";
import { useSelector, useDispatch } from "react-redux";
import Person_image from "../../components/Person_image";
import Styles1 from "../../css/Profile.module.css";
import { ADDTODO } from "../../redux/activitytodo/action.activity";
import axios from "axios";
import { useEffect } from "react";
import Backend from "../../components/anmolcomp/Backend";
import { Box } from "@chakra-ui/react";
import moment from "moment";
const Todo = () => {
  const [comment, setComment] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [loadind, setloading] = useState(false);
  useEffect(() => {
    getdata(state);
  }, []);
  const dispatch = useDispatch();
  const todo = useSelector((todos) => todos.todo.todos);
  function postdata(data = {}) {
    return axios.post("https://fitness-club-server.onrender.com/comments", {
      name: data,
      url: "https://github.com/Anmoljagota/Anmoljagota.github.io/blob/master/src/utilits/anmol3-removebg-preview%20crop.jpg?raw=true",
      personname: "Anmol jagota",
    });
  }
  async function getdata() {
    setTimeout(() => {
      setloading(true);
    }, 2000);
    let response = await axios.get("https://fitness-club-server.onrender.com/comments");
    let data = await response.data;
    setData(data);
  }
  function deletedata(id) {
    console.log("i am id", id);
    axios
      .delete(`https://fitness-club-server.onrender.com/comments/${id}`)
      .then((res) => console.log("data deleted successfully"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    postdata(state).then((res) => res.posts);
  }
  function handleChange(e) {
    setState(e.target.value);
  }

  if (loadind === false) {
    return <Box textAlign="center">...loading</Box>;
  }

  return (
    <div>
      <Box className={Styles.color}>Activity</Box>
      <div></div>

      <div className={Styles1.inputbox}>
        <form action="" onSubmit={handleSubmit} className="form">
          {show ? (
            <>
              <span className={Styles1.flexall}>
                {" "}
                <span style={{ marginTop: "17px" }}>
                  <Person_image />
                </span>
                <input
                  type="text"
                  onChange={handleChange}
                  className={Styles1.in}
                  onClick={() => setShow(true)}
                  style={{ marginLeft: "20px" }}
                />
              </span>
              <button
                className={Styles1.button}
                onClick={() => dispatch(ADDTODO({ name: state }))}
              >
                share
              </button>
            </>
          ) : (
            <div className={Styles.loading}>
              <Box className={Styles.comment}>
                <span>Write a comment</span>
              </Box>
              <input
                type="text"
                onChange={handleChange}
                className={Styles1.inn}
                onClick={() => setShow(true)}
              />
            </div>
          )}
        </form>
      </div>
      <div>
        <Backend data={data} deletedata={deletedata} />
        {todo.map((todos) => (
          <div key={todos.id} className={Styles.todos}>
            <div className={Styles.flexall}>
              <span>
                <Person_image />
              </span>{" "}
              <div className={Styles.name}>Anmol Jagota:<span
                  style={{
                    color: "black",
                    fontSize: "9pt",
                    marginLeft: "10px",
                    marginBottom: "5px",
                  }}
                >
                  {todos.name}
                </span>
              <Box fontSize="10pt" backgroundColor="white" color="grey" mt="10px">
                  {moment().calendar()}
                  <span
                    fontSize="9pt"
                    onClick={() => setComment(true)}
                    className={Styles.fixcolor}
                  >
                    Comment
                  </span>
                  <span
                    fontSize="9pt"
                    onClick={() => setComment(true)}
                    className={Styles.fixcolor}
                  >
                    Delete
                  </span>

                  {comment ? (
                    <Box className={Styles.againcomment}>
                      <Todo />
                    </Box>
                  ) : null}
                </Box>
              </div>
              {/* <div> */}
                
               
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
