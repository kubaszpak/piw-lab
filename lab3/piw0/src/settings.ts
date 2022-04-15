const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";
const PORT = process.env.REACT_APP_PORT || "3000";
const STUDENTS = process.env.STUDENTS || "api/students.json";
const GROUPS = process.env.GROUPS || "api/groups.json";

export const STUDENTS_ENDPOINT = `${BACKEND_URL}:${PORT}/${STUDENTS}`;

export const GROUPS_ENPOINT = `${BACKEND_URL}:${PORT}/${GROUPS}`;
