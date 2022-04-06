/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Group } from "../types";

interface Props {
  groupList: Group[];
}

class Groups extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { groupList } = this.props;
    return (
      <div>
        {groupList.map((group) => {
          return <div key={group.id}>Group {group.id}</div>;
        })}
      </div>
    );
  }
}

export default Groups;
