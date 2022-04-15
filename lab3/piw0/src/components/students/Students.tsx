import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Student, Tag } from "../../types";

interface HomeProps {
  studentList: Student[];
}

export default function Students({ studentList }: HomeProps) {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

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
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <div key={student.id}>
              <button
                type="button"
                className="link"
                onClick={() => {
                  navigate(`/message/student/${student.id}`);
                }}
              >
                <h1>{student.name}</h1>
              </button>
              <h2>{student.course}</h2>
              <h3>{student.description}</h3>
              <ul>
                <h3>Tags:</h3>
                {student.tags.map((tag) => {
                  return tag.name && <li key={tag.id}>{tag.name}</li>;
                })}
              </ul>
            </div>
          );
        })}
    </form>
  );
}