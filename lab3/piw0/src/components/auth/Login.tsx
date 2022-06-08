import React, { useContext, useState } from "react";
import LoggedUserContext from "../../contexts/LoggedUserContext";
import { User } from "../../types";
import FormItem from "../general/FormItem";
import { loginWithFacebook, logInWithGoogle } from "../../firebase/users";

interface Props {
  usersList: User[];
}

export default function Login({ usersList }: Props) {
  const [formLogin, setFormLogin] = useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");
  const { setLoggedUser } = useContext(LoggedUserContext);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = usersList.find((usr) => usr.login === formLogin);
    if (user && user.password === formPassword) {
      setError(null);
      setLoggedUser({
        login: formLogin,
        password: formPassword,
      });
      setFormLogin("");
      setFormPassword("");
      return;
    }
    setError("Credentials do not match any user!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormItem name="login" value={formLogin} valueSetter={setFormLogin} />
        <FormItem
          name="password"
          value={formPassword}
          valueSetter={setFormPassword}
          type="password"
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={logInWithGoogle}>
        Login with Google
      </button>
      <button type="button" onClick={loginWithFacebook}>
        Login with Facebook
      </button>
    </>
  );
}
