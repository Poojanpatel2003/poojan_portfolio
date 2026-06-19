import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ResumePage from "./page/Resume";
import Admin from "./page/Admin";
import AdminLogin from "./page/AdminLogin";

import {
BrowserRouter as Router,
Route,
Routes,
Navigate,
useLocation,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./page/Blog";
import BloggingPage from "./page/BloggingPage";

function AppContent() {
const location = useLocation();

const hideNavbarFooter =
location.pathname === "/admin" ||
location.pathname === "/admin-login";

return (
<>
{!hideNavbarFooter && <Navbar />}

```
  <ScrollToTop />

  <Routes>
    <Route path="/" element={<Home />} />

    <Route
      path="/admin-login"
      element={<AdminLogin />}
    />

    <Route
      path="/admin"
      element={
        localStorage.getItem("adminToken") ? (
          <Admin />
        ) : (
          <Navigate to="/admin-login" />
        )
      }
    />

    <Route path="/project" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BloggingPage />} />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>

  {!hideNavbarFooter && <Footer />}
</>


);
}

function App() {
const [load, upadateLoad] = useState(true);

useEffect(() => {
const timer = setTimeout(() => {
upadateLoad(false);
}, 1200);


return () => clearTimeout(timer);


}, []);

return ( <Router> <Preloader load={load} />


  <div
    className="App"
    id={load ? "no-scroll" : "scroll"}
  >
    <AppContent />
  </div>
</Router>


);
}

export default App;
