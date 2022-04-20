export interface StudentData {
  name: string;
  description: string;
  tags: Tag[];
  course: string;
  email: string;
  img: string;
}

export interface Student extends StudentData {
  id: number;
}

export type Tag = {
  id: number;
  name: string;
};

export interface GroupData {
  name: string;
  students: Student[];
  course: string;
  description: string;
}

export interface Group extends GroupData {
  id: number;
}
