import axios from "axios";
import { GROUPS_ENPOINT } from "../settings";

const fetchGroups = async () => {
  const groups = await axios.get(GROUPS_ENPOINT).then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    return [];
  });

  return groups;
};

export default fetchGroups;
