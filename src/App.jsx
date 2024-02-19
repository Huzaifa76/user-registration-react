import React from 'react'
import Registration from './components/Register'
import Login from './components/Login'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <Registration/>
    <Login/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
