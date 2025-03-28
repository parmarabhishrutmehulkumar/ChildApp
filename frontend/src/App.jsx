import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/Register/Login';
import ForgotP from './Components/Register/ForgotP';
import Otp from './Components/Register/Otp';
import ResetP from './Components/Register/ResetP';
import SignUp from './Components/Register/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotP />} />
        <Route path="/otp-verification" element={<Otp />} />
        <Route path="/reset-password" element={<ResetP />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
