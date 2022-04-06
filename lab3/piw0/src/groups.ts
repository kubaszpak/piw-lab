import students from "./students";
import { Group } from "./types";

const groups: Group[] = [
  {
    id: 1,
    name: "IT Freaks",
    course: "UCISW2",
    description: "We want to make a keyboard model in VHDL",
    students: [students[0]],
  },
];

export default groups;
