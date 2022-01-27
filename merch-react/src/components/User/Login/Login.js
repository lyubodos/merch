import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";
import classes from "./Login.module.css";

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(true);

  const emailChangeHandler = (e) => {
    const currEmail = e.target.value;

    setEnteredEmail(currEmail);

    validateEmailHandler(currEmail);
  };

  const validateEmailHandler = (email) => {
    setEmailIsValid(email.includes("@"));
  };

  const passChangeHanlder = (e) => {
    const currPass = e.target.value;

    setEnteredPass(currPass);

    validatePassword(currPass);
  };

  const validatePassword = (pass) => {
    setPasswordIsValid(pass.trim().length > 6);
  };

  return (
    <Card className={classes.login}>
      <form>
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
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
}
