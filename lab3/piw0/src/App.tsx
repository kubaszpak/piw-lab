import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import type { AppUser } from "./contexts/LoggedUserContext";
import Students from "./components/students/Students";
import Groups from "./components/groups/Groups";
import StudentForm from "./components/students/StudentForm";
import { Group, GroupData, Student, StudentData, User } from "./types";
import Layout from "./components/layout/Layout";
import GroupForm from "./components/groups/GroupForm";
import Message from "./components/Message";
import fetchStudents from "./api/StudentsService";
import fetchGroups from "./api/GroupsService";
import StudentInfo from "./components/students/StudentInfo";
import GroupInfo from "./components/groups/GroupInfo";
import Login from "./components/auth/Login";
import LoggedUserContext from "./contexts/LoggedUserContext";
import Register from "./components/auth/Register";
import { auth } from "./firebase/firebase";
import { logout } from "./firebase/users";

function App() {
  const [loggedUser, setLoggedUser] = useState<AppUser>(null);
  const value = useMemo(() => ({ loggedUser, setLoggedUser }), [loggedUser]);
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [studentCount, setStudentCount] = useState<number>(0);
  const [groupList, setGroupList] = useState<Group[]>([]);
  const [groupCount, setGroupCount] = useState<number>(0);
  const [usersList, setUsersList] = useState<User[]>([]);
  const [loggedInUser] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      const students = await fetchStudents();
      setStudentList(students);
      setStudentCount(students.length + 1);

      const groups = await fetchGroups();
      setGroupList(groups);
      setGroupCount(groups.length + 1);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoggedUser(loggedInUser);
  }, [loggedInUser]);

  const addStudentOffer = (student: StudentData) => {
    setStudentList(studentList.concat({ id: studentCount, ...student }));
    setStudentCount(studentCount + 1);
  };

  const addGroupOffer = (group: GroupData) => {
    setGroupList(groupList.concat({ id: groupCount, ...group }));
    setGroupCount(groupCount + 1);
  };

  const handleLogout = () => {
    logout();
    setLoggedUser(null);
  };

  return (
    <LoggedUserContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Layout handleLogout={handleLogout} />}>
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
          <Route
            path="message/student/:id"
            element={
              <Message to="student">
                {(id) => {
                  return (
                    <StudentInfo
                      student={studentList.filter((s) => s.id === id)[0]}
                    />
                  );
                }}
              </Message>
            }
          />
          <Route
            path="message/group/:id"
            element={
              <Message to="group">
                {(id) => {
                  return (
                    <GroupInfo
                      group={groupList.filter((g) => g.id === id)[0]}
                    />
                  );
                }}
              </Message>
            }
          />
          <Route path="login" element={<Login usersList={usersList} />} />
          <Route
            path="register"
            element={
              <Register usersList={usersList} setUsersList={setUsersList} />
            }
          />
        </Route>
      </Routes>
    </LoggedUserContext.Provider>
  );
}

export default App;
