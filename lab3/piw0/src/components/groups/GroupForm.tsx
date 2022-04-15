import { useState } from "react";
import { GroupData, Student } from "../../types";
import FormItem from "../general/FormItem";

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
      <FormItem name="name" value={name} valueSetter={setName} />
      <FormItem name="course" value={course} valueSetter={setCourse} />
      <FormItem
        name="description"
        value={description}
        valueSetter={setDescription}
        type="textarea"
      />
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
