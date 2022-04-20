import { useEffect, useState } from "react";
import getRandomImage from "../../api/RandomImageGenerator";
import { StudentData, Tag } from "../../types";
import FormObjectPartItem from "../general/FormObjectPartItem";

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
    img: "",
  };
  const [tagCounter, setTagCounter] = useState<number>(0);
  const [formData, setFormData] = useState<StudentData>({ ...initialFormData });

  const handleSubmitAd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addStudentOffer(formData);
    setFormData({ ...initialFormData });
    setTagCounter(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      setFormData({ ...formData, img: await getRandomImage() });
    };
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmitAd}>
      <FormObjectPartItem
        name="email"
        formData={formData}
        valueSetter={setFormData}
        type="email"
      />
      <FormObjectPartItem
        name="name"
        formData={formData}
        valueSetter={setFormData}
      />
      <FormObjectPartItem
        name="course"
        formData={formData}
        valueSetter={setFormData}
      />
      <FormObjectPartItem
        name="description"
        formData={formData}
        valueSetter={setFormData}
      />
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
