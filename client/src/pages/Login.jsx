import { useState } from "react";
import "../styles/components/Login.scss";
import FormField from "../components/FormField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";
const defData = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(defData);
  const dispath = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      nav("/");
    }
  }, [user, isLoading]);

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispath(login(formData));
  };
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
            <button type="submit">Zaloguj</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
