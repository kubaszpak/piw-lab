import axios from "axios";
import { STUDENTS_ENDPOINT } from "../settings";

const fetchStudents = async () => {
  const data = await axios.get(STUDENTS_ENDPOINT).then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return [];
  });

  return data;
};

export default fetchStudents;
