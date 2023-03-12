import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";
import InputField from "../components/InputField";
import Logo from "../components/Logo";
import { useAuth } from "../utils/auth";

const Login = () => {
  const { user, signin } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: { requireMsg: "", msg: "" },
    password: { requireMsg: "", msg: "" },
    auth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmails = () => {
    // Define a regular expression for email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Check if both emails are not empty and are valid
    if (!emailRegex.test(formData.email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          ...prevErrors.email,
          msg: emailRegex.test(formData.email)
            ? ""
            : "O e-mail deve ser válido",
        },
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          ...prevErrors.email,
          msg: "",
        },
      }));
    }
  };

  const validateFields = (fieldName) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: {
        ...prevErrors[fieldName],
        requireMsg: formData[fieldName] ? "" : "Esse campo é obrigatório",
      },
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    validateFields(name);

    if (name === "email") {
      validateEmails();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateFields("email");
    validateFields("password");

    validateEmails();

    const hasErrors =
      formErrors.email.requireMsg ||
      formErrors.email.msg ||
      formErrors.password.requireMsg ||
      formData.email === "" ||
      formData.password === "";

    if (!hasErrors) {
      const result = await signin(formData.email, formData.password);

      if (result) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          auth: result,
        }));
      } else {
        // Reset form data
        setFormData({
          email: "",
          password: "",
        });
      }
    }
  };

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            fazer cadastro
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          onSubmit={handleSubmit}
        >
          <InputField
            id="email"
            label="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors.email}
          />
          <InputField
            id="password"
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors.password}
          />
          <div className="mt-2 flex items-center justify-end">
            <Link
              to="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 text-sm leading-5"
            >
              Esqueceu a senha?
            </Link>
          </div>
          {formErrors.auth && <ErrorMsg msg={formErrors.auth} />}
          <button
            type="submit"
            className="mt-6 shadow-sm w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
          >
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
