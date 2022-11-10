import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "../../css/activity.module.css";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
import Todo from "./Todo";
import Person_image from "../../components/Person_image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
const Activity = () => {
  const [comment, setComment] = useState(false);

  const dispatch = useDispatch();
  const todo = useSelector((todos) => todos.todo.todos);
  console.log("lllll", todo);
  return (
    <>
      <div>
        <Box className={Styles.color}>Activity</Box>
        <Box className={Styles.comment}>
          Write a comment
          <Todo />
        </Box>
      </div>
      <div>
        {todo.map((todos) => (
          <div key={todos.id} className={Styles.todos}>
            <div className={Styles.flexall}>
             <span><Person_image/></span> <div className={Styles.name}>Anmol Jagota</div>
              <div>:{todos.name}
              <Box
              fontSize="10pt"
              backgroundColor="white"
              border="1px solid grey"
            >
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
              
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Activity;
