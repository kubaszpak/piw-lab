import { Student } from "./types";

const students: Student[] = [
  {
    id: 1,
    name: "Kuba",
    course: "PIW - Programowanie Interfejów Webowych",
    description: "Looking for a cool Web Project to start!",
    tags: [
      { id: 1, name: "web" },
      { id: 2, name: "react" },
      { id: 3, name: "angular" },
    ],
    email: "kuba@gmail.com",
  },
  {
    id: 2,
    name: "Tomek",
    course: "PiPG - Projektowanie i Programowanie Gier",
    description:
      "I am looking for a group of ambitious students who would be interested in choosing a game development related subject!",
    tags: [
      { id: 1, name: "game development" },
      { id: 2, name: "unity" },
    ],
    email: "tomek@gmail.com",
  },
  {
    id: 3,
    name: "Piotrek",
    course: "PZ - Projekt Zespołowy",
    description: "Let's do as little as possible and pass!",
    tags: [{ id: 1, name: "piwo" }],
    email: "piotek@gmail.com",
  },
];

export default students;
