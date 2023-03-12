import logo from "../assets/kiwify-green-logo.2af0e50.png";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Dashboard = () => {
  const { user, signout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/">
          <img src={logo} alt="Kiwify" className="mx-auto h-12 w-auto" />
        </Link>
        {user ? (
          <div>
            <p className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              E-mail: {user.email}
            </p>
            <button
              onClick={() => signout()}
              className="mt-6 shadow-sm w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
            >
              Sair
            </button>
          </div>
        ) : (
          <div>
            <p className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Usuário não encontrado!
            </p>
            <Link
              to="/signup"
              className="mt-6 shadow-sm w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
            >
              Criar conta
            </Link>
            <Link
              to="/login"
              className="mt-6 shadow-sm w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
            >
              Entrar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
