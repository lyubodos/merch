import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Header.module.css";
import frog_logo from "../../../assets/frog_logo.png";

export default function Header(props) {
  const navigate = useNavigate();

  const logoutHandler = e => {
    props.onLogout();
    navigate("/");

  }

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.header_panel}>
          <img className={classes.logo} src={frog_logo} alt="frog logo" />
          <h1 className={classes.header_heading}>Hexed shirts</h1>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/merch">
                Merch
              </Link>
            </li>
            {!props.isLogged ? (
              <li>
                <Link className="nav_link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link className="nav_link" to="" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
