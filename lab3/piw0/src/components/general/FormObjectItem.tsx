import { Dispatch, SetStateAction } from "react";
import { StudentData } from "../../types";

interface FormObjectItemProps {
  name: string;
  formData: StudentData;
  valueSetter: Dispatch<SetStateAction<any>>;
  type?: string;
}

function FormObjectItem({
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
        value={(formData as any)[name]}
        onChange={(e) => {
          // const newFormData = formData.splice();
          // TODO set value manually and use it in setState
          valueSetter({ ...formData, name: e.target.value });
        }}
      />
    </label>
  );
}

FormObjectItem.defaultProps = {
  type: "text",
};

export default FormObjectItem;
