const ErrorMsg = ({ msg }) => {
  return (
    <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 mb-8">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="24px"
            height="24px"
            className="text-red-400"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>{" "}
        <div className="ml-3">
          <p className="text-sm leading-5 text-red-700">{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMsg;
