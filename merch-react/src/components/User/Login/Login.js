import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";
import classes from "./Login.module.css";

const reducerEmail = (state, action) => {
    if(action.type === "USER_INPUT"){
        return{value: action.val, isValid: action.val.includes("@")};
    }

    if(action.type === "INPUT_BLUR"){
        return { value: state.value , isValid: state.value.includes("@")} ;
    }

    return { value: '', isValid: false };
}

const reducerPass = (state, action) => {
    if(action.type === "USER_INPUT"){
        return{value: action.val, isValid: action.val.trim().length > 6};
    }

    if(action.type === "INPUT_BLUR"){
        return { value: state.value , isValid: state.value.trim().length > 6} ;
    }

    return { value: '', isValid: false };
}

export default function Login(props) {
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  const [emailState, dispatchEmail] = useReducer(reducerEmail, {value: "", isValid: null});
  const [passState, dispatchPass] = useReducer(reducerPass, {value: "", isValid: null})


  const emailChangeHandler = (e) => {
    dispatchEmail({type: "USER_INPUT", val: e.target.value });

    setFormIsValid(e.target.value.includes("@") && passState.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR"});
};

  const passChangeHanlder = (e) => {
    dispatchPass({type: "USER_INPUT", val: e.target.value });

    setFormIsValid(emailState.value.includes("@") && e.target.value.trim().length > 6);

  };

  const validatePassword = (pass) => {
    dispatchPass({type: "INPUT_BLUR"})
  };

  const onSubmitHanlder = e => {
      e.preventDefault();

      props.onLogin();
      navigate("/");
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={onSubmitHanlder}>
        <div
          className={`${classes.control} ${
            emailState.isValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passChangeHanlder}
            onBlur={validatePassword}
          />
        </div>
        <div>
          <Button type="submit"  disabled={!formIsValid}>Login</Button>
        </div>
      </form>
    </Card>
  );
}
