import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "../../css/activity.module.css";
import { useSelector, useDispatch } from "react-redux";
import { ADDTODO } from "../../redux/activitytodo/action.activity";
import moment from "moment";
const Activity = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((todos) => todos.todo.todos);
  console.log("lllll", todo);
  function handleChange(e) {
    setState(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  // console.log(state)
  return (
    <>
      <div>
        <Box className={Styles.color}>Activity</Box>
        <h5>Write a comment</h5>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button onClick={() => dispatch(ADDTODO({ name: state }))}>
            comment
          </button>
        </form>
      </div>
      <div>
        {todo.map((todos) => (
          <>
            <div key={todos.id}>{todos.name}</div>
            <div>{moment().calendar()}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Activity;
