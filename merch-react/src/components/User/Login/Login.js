import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";
import classes from "./Login.module.css";

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setTimeout(() => {
        console.log("RUNNING");
      validateEmailHandler(enteredEmail);
      validatePassword(enteredPass);

      setFormIsValid(enteredEmail.includes("@") && enteredPass.trim().length > 6);

    }, 500);

    return () => {
        console.log("CLEANUP!");
        clearInterval(interval);
    };
  }, [enteredEmail, enteredPass]);

  const emailChangeHandler = (e) => {
    const currEmail = e.target.value;

    setEnteredEmail(currEmail);
  };

  const validateEmailHandler = (email) => {
    setEmailIsValid(email.includes("@"));
  };

  const passChangeHanlder = (e) => {
    const currPass = e.target.value;

    setEnteredPass(currPass);
  };

  const validatePassword = (pass) => {
    setPasswordIsValid(pass.trim().length > 6);
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
            emailIsValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPass}
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
