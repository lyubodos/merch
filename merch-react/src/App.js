import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from './components/Layout/Header/Header';
import Home from "./components/Layout/Home/Home";
import Merch from "./components/Merch/Merch";
import Login from './components/User/Login/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInValue = localStorage.getItem("isLoggedIn");
    if(loggedInValue === 1){
      setIsLoggedIn(true);
    } else {
      localStorage.setItem('isLoggedIn', 0);
    }

  }, []);


  function loginHandler(){
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(true);

  }

  function logoutHandler() {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 0);
  }

  return (
    <div className="App">
      <Router>
      <Header isLogged={isLoggedIn} onLogout={logoutHandler}/>

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/merch" element={<Merch/>}/>
        <Route path="/login"  element={<Login onLogin={loginHandler} />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
