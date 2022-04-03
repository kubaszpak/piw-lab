export interface Student {
  id: number;
  name: string;
  description: string;
  tags: Tag[];
  course: string;
  email: string;
}

export type Tag = {
  id: number;
  name: string;
};
