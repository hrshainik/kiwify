import { Link } from "react-router-dom";
import logo from "../assets/kiwify-green-logo.2af0e50.png";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={logo} alt="Kiwify" className="mx-auto h-12 w-auto" />
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
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              E-mail
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              Repetir e-mail
            </label>
            <input
              type="email"
              autoComplete="off"
              className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              autoComplete="off"
              className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="" className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="appearance-none inline-block align-middle bg-origin-border select-none shrink-0 border rounded h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer focus:outline-none	focus:border-[#a4cafe] focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] checked:bg-checkbox checked:border-transparent checked:bg-current checked:bg-center checked:bg-no-repeat checked:focus:border-transparent"
                />
              </div>
              <div className="ml-2 text-sm leading-5">
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
              </div>
            </label>
          </div>
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Criar conta
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
