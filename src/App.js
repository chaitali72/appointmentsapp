import "./App.css";
import { Navbar } from "./components/Navbar";
import { AddUsers } from "./components/AddUsers";
import { AllUsers } from "./components/AllUsers";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import RandomUsers from "./components/RandomUsers";
import About from "./components/About";
import AboutClass from "./components/AboutClass";
function App() {
  return (
    <div className="App">
      <h1>
        <FaCalendarCheck className="icons" /> Your Appointments
      </h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/random" element={<RandomUsers />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutc" element={<AboutClass />} />
      </Routes>
    </div>
  );
}

export default App;
