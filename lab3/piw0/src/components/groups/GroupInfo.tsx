import { useNavigate } from "react-router-dom";
import { Group, Student } from "../../types";

interface Props {
  group: Group;
}

export default function GroupInfo({ group }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        className="link"
        onClick={() => navigate(`/message/group/${group.id}`)}
      >
        <h3>{group.name}</h3>
      </button>
      <p>{group.description}</p>
      <p>{group.course}</p>
      <div>
        {group.students.map((student: Student) => {
          return (
            <div
              key={student.id}
            >{`${student.name} - ${student.description}`}</div>
          );
        })}
      </div>
    </div>
  );
}
