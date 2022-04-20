import { Dispatch, SetStateAction } from "react";
import { StudentData } from "../../types";

interface FormObjectItemProps {
  name: Exclude<keyof StudentData, "tags">;
  formData: StudentData;
  valueSetter: Dispatch<SetStateAction<StudentData>>;
  type?: string;
}

function FormObjectPartItem({
  name,
  formData,
  valueSetter,
  type,
}: FormObjectItemProps) {
  return (
    <label htmlFor={name}>
      {name[0].toUpperCase() + name.slice(1)}
      <input
        type={type}
        name={name}
        id={name}
        required
        placeholder={name}
        value={formData[name]}
        onChange={(e) => {
          const newFormData = { ...formData };
          newFormData[name] = e.target.value;
          valueSetter(newFormData);
        }}
      />
    </label>
  );
}

FormObjectPartItem.defaultProps = {
  type: "text",
};

export default FormObjectPartItem;
