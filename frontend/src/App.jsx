import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
