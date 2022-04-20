import { useNavigate } from "react-router-dom";
import { Student } from "../../types";

interface Props {
  student: Student;
}

export default function StudentInfo({ student }: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        className="link"
        onClick={() => {
          navigate(`/message/student/${student.id}`);
        }}
      >
        <h1>{student.name}</h1>
      </button>
      <br />
      {student.img && <img src={student.img} alt="student profile" />}
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
}
