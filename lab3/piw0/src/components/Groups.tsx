/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Group, Student } from "../types";

interface Props {
  groupList: Group[];
}

class Groups extends React.Component<Props> {
  render() {
    const { groupList } = this.props;
    return (
      <>
        {groupList.map((group) => {
          return (
            <div key={group.id}>
              <h3>{group.name}</h3>
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
