const InputField = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  errors,
}) => {
  return (
    <div className="mt-6 first:mt-0">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 mb-1 text-gray-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete="off"
        className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] ${
          errors.requireMsg || errors.msg ? "border-red-500" : ""
        }`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {id !== "password" && !errors.requireMsg && errors.msg && (
        <p className="text-xs text-red-500 mt-1">{errors.msg}</p>
      )}
      {errors.requireMsg && (
        <p className="text-xs text-red-500 mt-1">{errors.requireMsg}</p>
      )}
    </div>
  );
};

export default InputField;
