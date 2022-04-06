import students from "./students";
import { Group } from "./types";

const groups: Group[] = [
  {
    id: 1,
    name: "IT Freaks",
    course: "PiPG",
    description: "We want to make a keyboard model in VHDL!",
    students: [students[1]],
  },
  {
    id: 2,
    name: "Java scubas",
    description:
      "Our mission is to create the most secure backend for a Web Application!",
    course: "Fullstack",
    students: [students[0], students[2]],
  },
];

export default groups;
