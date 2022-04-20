import React from "react";
import { Group } from "../../types";
import GroupInfo from "./GroupInfo";

interface Props {
  groupList: Group[];
}

class Groups extends React.Component<Props> {
  render() {
    const { groupList } = this.props;
    return (
      <>
        {groupList.map((group) => {
          return <GroupInfo key={group.id} group={group} />;
        })}
      </>
    );
  }
}

export default Groups;
