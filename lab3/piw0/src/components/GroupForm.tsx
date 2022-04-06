import { useState } from "react";
import { GroupData, Student } from "../types";

interface GroupFormProps {
  studentList: Student[];
  addGroupOffer: (group: GroupData) => void;
}

export default function GroupForm({
  studentList,
  addGroupOffer,
}: GroupFormProps) {
  const [name, setName] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);
  const [course, setCourse] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleSubmitAd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addGroupOffer({ name, students, course, description });
    setName("");
    setCourse("");
    setDescription("");
    setStudents([]);
  };

  return (
    <form onSubmit={handleSubmitAd}>
      <label htmlFor="name">
        Name
        <input
          type="name"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="course">
        Course
        <input
          required
          type="text"
          name="course"
          id="course"
          placeholder="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          required
          type="textarea"
          name="description"
          id="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <h3>Students: </h3>
      {studentList.map((student) => {
        return (
          <div key={student.id}>
            {student.name}
            <input
              type="checkbox"
              checked={students.some((s) => s.id === student.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setStudents(students.concat(student));
                } else {
                  setStudents(students.filter((s) => s.id !== student.id));
                }
              }}
            />
            <br />
            {student.course}
            <br />
            {student.description}
            <br />
            <br />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
