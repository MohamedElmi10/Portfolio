import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projects from "./Projects";

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
