import { useState } from "react";
import { Student, Tag } from "../../types";
import StudentInfo from "./StudentInfo";

interface HomeProps {
  studentList: Student[];
}

export default function Students({ studentList }: HomeProps) {
  const [filter, setFilter] = useState("");

  return (
    <form>
      <label htmlFor="filter">
        <h4>Filter</h4>
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          placeholder="Filter"
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </label>
      {studentList
        .filter((student: Student) => {
          return (
            student.course.toLowerCase().includes(filter) ||
            student.description.toLowerCase().includes(filter) ||
            student.tags.some((tag: Tag) => {
              return tag.name.toLowerCase().includes(filter);
            })
          );
        })
        .map((student: Student) => {
          return <StudentInfo key={student.id} student={student} />;
        })}
    </form>
  );
}
