import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CheckboxField from "../components/CheckboxField";
import ErrorMsg from "../components/ErrorMsg";
import InputField from "../components/InputField";
import Logo from "../components/Logo";
import { useAuth } from "../utils/auth";

const Signup = () => {
  const { signup, user } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    repeatEmail: "",
    password: "",
    termsAndCondition: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: { requireMsg: "", msg: "" },
    repeatEmail: { requireMsg: "", msg: "" },
    password: { requireMsg: "", msg: "" },
    termsAndCondition: { requireMsg: "" },
  });

  const validateEmails = () => {
    // Define a regular expression for email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Check if both emails are not empty and are valid
    if (
      formData.email !== formData.repeatEmail ||
      !emailRegex.test(formData.email)
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          ...prevErrors.email,
          msg: emailRegex.test(formData.email)
            ? ""
            : "O e-mail deve ser válido",
        },
        repeatEmail: {
          ...prevErrors.repeatEmail,
          msg:
            formData.email !== formData.repeatEmail
              ? "Os dois e-mails devem ser iguais."
              : "",
        },
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          ...prevErrors.email,
          msg: "",
        },
        repeatEmail: {
          ...prevErrors.repeatEmail,
          msg: "",
        },
      }));
    }
  };

  const validatePassword = () => {
    const password = formData.password;

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password)
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: {
          ...prevErrors.password,
          msg: "auth/weak-password",
        },
      }));
      return false;
    }

    // If all criteria are met, password is considered strong
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      password: {
        ...prevErrors.password,
        msg: "",
      },
    }));
    return true;
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    validateFields(name);

    if (name === "email" || name === "repeatEmail") {
      validateEmails();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFields("email");
    validateFields("repeatEmail");
    validateFields("password");
    validateFields("termsAndCondition");

    validateEmails();

    const hasErrors =
      formErrors.email.requireMsg ||
      formErrors.email.msg ||
      formErrors.repeatEmail.requireMsg ||
      formErrors.repeatEmail.msg ||
      formErrors.password.requireMsg ||
      formErrors.termsAndCondition.requireMsg ||
      formData.email === "" ||
      formData.repeatEmail === "" ||
      formData.password === "" ||
      formData.termsAndCondition === false;

    if (!hasErrors && validatePassword()) {
      signup(formData.email, formData.password);
      // Reset form data
      setFormData({
        email: "",
        repeatEmail: "",
        password: "",
        termsAndCondition: false,
      });
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
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            entrar na sua conta existente
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
            id="repeatEmail"
            label="Repetir e-mail"
            type="email"
            name="repeatEmail"
            value={formData.repeatEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors.repeatEmail}
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
          <CheckboxField
            id="terms"
            type="checkbox"
            name="termsAndCondition"
            checked={formData.termsAndCondition}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={formErrors.termsAndCondition}
          >
            <span className="font-medium text-gray-700">
              Eu li e aceito os{" "}
              <Link
                to="https://kiwify.com.br/termos-de-uso"
                target="_blank"
                className="underline"
              >
                termos de uso
              </Link>
              ,{" "}
              <Link
                to="https://kiwify.com.br/licenca-de-uso-software"
                target="_blank"
                className="underline"
              >
                termos de licença de uso de software
              </Link>
              ,{" "}
              <Link
                to="https://kiwify.com.br/politica-de-conteudo"
                target="_blank"
                className="underline"
              >
                política de conteúdo
              </Link>{" "}
              da Kiwify
            </span>
          </CheckboxField>

          {formErrors.password.msg && (
            <ErrorMsg msg={formErrors.password.msg} />
          )}

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

export default Signup;
