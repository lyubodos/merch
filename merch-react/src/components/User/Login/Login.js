import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";
import classes from "./Login.module.css";

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");


  const emailChangeHandler = () => {};

  const validateEmailHandler = () => {};


  const passChangeHanlder = () => {};

  const validatePassword = () => {};


  return (
    <Card className={classes.login}>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.control}>
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
