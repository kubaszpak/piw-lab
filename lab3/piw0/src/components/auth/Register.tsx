import React, { Dispatch, SetStateAction, useState } from "react";
import { User } from "../../types";
import FormItem from "../general/FormItem";

interface Props {
  usersList: User[];
  setUsersList: Dispatch<SetStateAction<User[]>>;
}

export default function Register({ usersList, setUsersList }: Props) {
  const [formLogin, setFormLogin] = useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");
  const [formConfirmPassword, setFormConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formPassword || !formLogin) {
      setError("No empty values");
      return;
    }
    if (formPassword !== formConfirmPassword) {
      setError("Passwords need to match");
    } else {
      if (usersList.find((user) => user.login === formLogin)) {
        setError("User with this login already exists");
        return;
      }
      setError(null);
      // TODO: Add password hashing and JWT TOKEN
      const newUsersList = usersList.slice();
      newUsersList.push({
        login: formLogin,
        password: formPassword,
      });
      setUsersList(newUsersList);
      setFormLogin("");
      setFormPassword("");
      setFormConfirmPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem name="login" value={formLogin} valueSetter={setFormLogin} />
      <FormItem
        name="password"
        value={formPassword}
        valueSetter={setFormPassword}
        type="password"
      />
      <FormItem
        name="confirm password"
        value={formConfirmPassword}
        valueSetter={setFormConfirmPassword}
        type="password"
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}
