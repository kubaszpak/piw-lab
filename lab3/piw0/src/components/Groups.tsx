import React from "react";
import { Navigate } from "react-router-dom";
import { Group, Student } from "../types";

interface Props {
  groupList: Group[];
}

interface State {
  shouldNavigateId: number | null;
}

class Groups extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shouldNavigateId: null,
    };
  }

  render() {
    const { groupList } = this.props;
    const { shouldNavigateId } = this.state;
    return (
      <>
        {groupList.map((group) => {
          return (
            <div key={group.id}>
              {shouldNavigateId && (
                <Navigate to={`/message/group/${shouldNavigateId}`} />
              )}
              <button
                type="button"
                className="link"
                onClick={() => this.setState({ shouldNavigateId: group.id })}
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
        })}
      </>
    );
  }
}

export default Groups;
