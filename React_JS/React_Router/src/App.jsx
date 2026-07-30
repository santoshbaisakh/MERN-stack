// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Assignments/Home";
import Contact from "./Assignments/Contact";
import About from "./Assignments/About";
import Dashboard from "./Assignments/Dashboard";
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element:
//       <div>
//         <Home />
//         <Navbar/>
//       </div>
//     },
//     {
//       path: '/about',
//       element:
//       <div>
//         <About />
//         <Navbar/>
//       </div>
//     },
//     {
//       path:'/dashboard',
//       element:
//       <div>
//         <Dashboard />
//         <Navbar/>
//       </div>
//     }
//   ]
// );

function App() {
  return (
    // <>
    //   {/* <RouterProvider router={router} /> */}
    //   {/* <Navbar /> */}
    // </>
    <BrowserRouter>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>React Router Example</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
