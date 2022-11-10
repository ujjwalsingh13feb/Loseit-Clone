import React, { useState } from "react";
import Person_image from "../../components/Person_image";
import Styles from "../../css/Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import {ADDTODO} from "../../redux/activitytodo/action.activity"
const Todo = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setState(e.target.value);
  }
  return (
    <div>
      <div className={Styles.inputbox}>
        <form action="" onSubmit={handleSubmit} className="form">
          {show ? (
            <>
              <span className={Styles.flexall}>
                {" "}
                <Person_image />
                <input
                  type="text"
                  onChange={handleChange}
                  className={Styles.in}
                  onClick={() => setShow(true)}
                />
              </span>
              <button  style={{marginLeft:"150px",marginTop:"5px",fontWeight:"700",borderRadius:"2px"}} onClick={() => dispatch(ADDTODO({ name: state }))}>
            share
          </button>
            </>
          ) : (
            <input
              type="text"
              onChange={handleChange}
              className={Styles.in}
              onClick={() => setShow(true)}
            />
          )}
</form>
      </div>
    </div>
  );
};

export default Todo;
