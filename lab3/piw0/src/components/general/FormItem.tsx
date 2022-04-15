import { Dispatch, SetStateAction } from "react";

interface FormItemProps {
  name: string;
  value: string;
  valueSetter: Dispatch<SetStateAction<any>>;
  type?: string;
}

function FormItem({ name, value, valueSetter, type }: FormItemProps) {
  return (
    <label htmlFor={name}>
      {name[0].toUpperCase() + name.slice(1)}
      <input
        required
        type={type}
        name={name}
        id={name}
        placeholder={name}
        value={value}
        onChange={(e) => valueSetter(e.target.value)}
      />
    </label>
  );
}

FormItem.defaultProps = {
  type: "text",
};

export default FormItem;
