const CheckboxField = ({
  id,
  name,
  checked,
  onChange,
  onBlur,
  errors,
  children,
}) => {
  return (
    <div className="mt-6">
      <label htmlFor={id} className="relative flex items-start mt-2">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            id={id}
            className={`appearance-none inline-block align-middle bg-origin-border select-none shrink-0 border rounded h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer focus:outline-none	focus:border-[#a4cafe] focus:shadow-[0_0_0_3px_rgba(164,202,254,0.45)] checked:bg-checkbox checked:border-transparent checked:bg-current checked:bg-center checked:bg-no-repeat checked:focus:border-transparent ${
              errors.requireMsg || errors.msg ? "border-red-500" : ""
            }`}
            name={name}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        <div className="ml-2 text-sm leading-5">
          {children}{" "}
          {errors.requireMsg && (
            <p className="text-red-500">({errors.requireMsg})</p>
          )}
        </div>
      </label>
    </div>
  );
};

export default CheckboxField;
