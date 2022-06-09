import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { auth, db } from "./shared/firebase"
import Signup from './Signup';
import Card_list from './Card_list'
//react
import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"
//firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"
//material
import Button from '@mui/material/Button';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (

    <div>
      <Link to="/">
        <Button variant="outlined" size="small">
          홈
        </Button>
      </Link>
      <h1>환영합니다!</h1>
      <button onClick={() => {
        signOut(auth)
      }}>로그아웃</button>
      <hr />
      <Card_list />
    </div>
  )
}


function App() {

  const [is_login, setIs_login] = React.useState(false)

  console.log(auth.currentUser)

  const loginCheck = async (user) => {
    if (user) {
      setIs_login(true);
    } else {
      setIs_login(false);
    }
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {is_login ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;