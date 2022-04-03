import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import students from "./students";

function App() {
  const [studentList] = useState(students);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home studentList={studentList} />} />
      </Routes>
    </>
  );
}

export default App;
