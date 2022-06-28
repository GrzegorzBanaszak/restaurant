import { useState } from "react";
import "../styles/components/Login.scss";
import FormField from "../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
const defData = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(defData);
  const [error, setError] = useState("");
  const dispath = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const nav = useNavigate();

  useEffect(() => {
    if (isError) {
      setError(message);
      dispath(reset());
    }
    if (isSuccess || user) {
      dispath(reset());
      nav("/");
    }
  }, [user, nav, isError, isSuccess, message, setError, dispath]);

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispath(login(formData));
  };

  if (isLoading) {
    return <Spinner color="white" />;
  }
  return (
    <>
      <section className="login">
        <div className="login__container">
          <h2 className="login__title">Logowanie</h2>
          <form className="login__form" onSubmit={onSubmitHandler}>
            <FormField
              inputName="Email"
              formType="email"
              value={formData.email}
              changeHandler={inputChangeHandler}
            />
            <FormField
              inputName="Hasło"
              formType="password"
              inputType="password"
              value={formData.password}
              changeHandler={inputChangeHandler}
            />
            {error && <p className="login__error">{error}</p>}
            <button type="submit">Zaloguj</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
