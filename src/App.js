import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import './App.scss';

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const PrivateRoute = ({ children, isLogged, ...rest }) => {
  return isLogged ? children : <Navigate to="/login"/>
}

function App() {
  const [ showModal, setShowModal ] = useState(false)
  const [ name, setName ] = useState()
  const [ account, setAccount ] = useState()
  const isLogged = name && account
  
  const fakeAuth = {
    login(name, account, cb) {
      setName(name)
      setAccount(account)
      setTimeout(cb, 100)
    },
    logout(cb) {
      setName()
      setAccount()
      setTimeout(cb, 100)
    }
  }

  return (
    <Router>
      <Navbar onClick={() => setShowModal(true)} isLogged={isLogged} auth={fakeAuth}/>
      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)}/>} />
        <Route path="/login" element={<Login auth={fakeAuth}/>} />
        <Route path="/dashboard/*" element={<PrivateRoute isLogged={isLogged}><Dashboard name={name} account={account} /></PrivateRoute>} />
      </Routes>
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} auth={fakeAuth}/>
    </Router>
  );
}

export default App;
