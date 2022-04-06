import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import Groups from "./components/Groups";
import students from "./students";
import Ad from "./components/Ad";
import { Group, Student, StudentData } from "./types";
import groups from "./groups";

function App() {
  const [studentList, setStudentList] = useState<Student[]>(students);
  const [studentCount, setStudentCount] = useState<number>(students.length + 1);
  const [groupList] = useState<Group[]>(groups);

  const addStudentOffer = (student: StudentData) => {
    setStudentList(studentList.concat({ id: studentCount, ...student }));
    setStudentCount(studentCount + 1);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Students studentList={studentList} />} />
        <Route
          path="create"
          element={<Ad addStudentOffer={addStudentOffer} />}
        />
        <Route path="groups" element={<Groups groupList={groupList} />} />
      </Routes>
    </>
  );
}

export default App;
