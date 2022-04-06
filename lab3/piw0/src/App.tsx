import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Students from "./components/Students";
import Groups from "./components/Groups";
import students from "./students";
import StudentForm from "./components/StudentForm";
import { Group, GroupData, Student, StudentData } from "./types";
import groups from "./groups";
import Layout from "./components/Layout";
import GroupForm from "./components/GroupForm";
import Message from "./components/Message";

function App() {
  const [studentList, setStudentList] = useState<Student[]>(students);
  const [studentCount, setStudentCount] = useState<number>(students.length + 1);
  const [groupList, setGroupList] = useState<Group[]>(groups);
  const [groupCount, setGroupCount] = useState<number>(groups.length + 1);

  const addStudentOffer = (student: StudentData) => {
    setStudentList(studentList.concat({ id: studentCount, ...student }));
    setStudentCount(studentCount + 1);
  };

  const addGroupOffer = (group: GroupData) => {
    setGroupList(groupList.concat({ id: groupCount, ...group }));
    setGroupCount(groupCount + 1);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Students studentList={studentList} />} />
        <Route
          path="students"
          element={<Students studentList={studentList} />}
        />
        <Route
          path="students/new"
          element={<StudentForm addStudentOffer={addStudentOffer} />}
        />
        <Route path="groups" element={<Groups groupList={groupList} />} />
        <Route
          path="groups/new"
          element={
            <GroupForm
              studentList={studentList}
              addGroupOffer={addGroupOffer}
            />
          }
        />
        <Route path="message/*" element={<Message />} />
      </Route>
    </Routes>
  );
}

export default App;
