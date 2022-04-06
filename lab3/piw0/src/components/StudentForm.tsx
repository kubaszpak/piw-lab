import { useState } from "react";
import { StudentData, Tag } from "../types";

interface StudentFormProps {
  addStudentOffer: (student: StudentData) => void;
}

export default function StudentForm({ addStudentOffer }: StudentFormProps) {
  const initialFormData: StudentData = {
    name: "",
    email: "",
    course: "",
    description: "",
    tags: [],
  };
  const [tagCounter, setTagCounter] = useState<number>(0);
  const [formData, setFormData] = useState<StudentData>({ ...initialFormData });

  const handleSubmitAd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addStudentOffer(formData);
    setFormData({ ...initialFormData });
    setTagCounter(0);
  };

  return (
    <form onSubmit={handleSubmitAd}>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label htmlFor="course">
        Course
        <input
          required
          type="text"
          name="course"
          id="course"
          placeholder="course"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          required
          type="textarea"
          name="description"
          id="description"
          placeholder="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      {formData.tags.map((el) => {
        return (
          <div key={el.id}>
            <label htmlFor={`tag ${el.id}`}>
              Tag
              <input
                type="text"
                name={`tag ${el.id}`}
                id={`tag ${el.id}`}
                value={formData.tags.find((entry) => entry.id === el.id)!.name}
                onChange={(e) => {
                  const tags = formData.tags.slice();
                  tags.find((entry) => entry.id === el.id)!.name =
                    e.target.value;
                  setFormData({ ...formData, tags });
                }}
              />
            </label>
            <button
              type="button"
              tabIndex={-1}
              onClick={() => {
                setFormData({
                  ...formData,
                  tags: formData.tags.filter((tag: Tag) => {
                    return tag.id !== el.id;
                  }),
                });
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          const tags = formData.tags.slice();
          tags.push({ id: tagCounter + 1, name: "" });
          setFormData({ ...formData, tags });
          setTagCounter((i) => i + 1);
        }}
      >
        Add tag
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
