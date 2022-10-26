import "./App.css";
import { Navbar } from "./components/Navbar";
import { AddUsers } from "./components/AddUsers";
import { AllUsers } from "./components/AllUsers";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import RandomUsers from "./components/RandomUsers";

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
      </Routes>
    </div>
  );
}

export default App;
