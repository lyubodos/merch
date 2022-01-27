import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Header from './components/Layout/Header/Header';
import Home from "./components/Layout/Home/Home";
import Merch from "./components/Merch/Merch";
import Login from './components/User/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/merch" element={<Merch/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
