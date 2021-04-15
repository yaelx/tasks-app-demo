import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import EmailPasswordForm from "../../components/EmailPasswordForm/index";

const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <EmailPasswordForm
      handleSubmit={handleSubmit}
      email={email}
      handleEmail={handleEmail}
      password={password}
      handlePassword={handlePassword}
      buttonText="Sign Up"
      error={error}
    />
  );
};

export default SignUpScreen;
