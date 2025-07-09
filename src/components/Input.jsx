const Input = ({
  type,
  onInputChange,
  placeholder,
  htmlFor,
  label,
  name,
  id,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label htmlFor={htmlFor} className="text-lg md:text-2xl font-semibold">
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onInputChange}
        name={name}
        className="border border-black text-base md:text-lg p-2 rounded-md"
      />
    </div>
  );
};

export default Input;
