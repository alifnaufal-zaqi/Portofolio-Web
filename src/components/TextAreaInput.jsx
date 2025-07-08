const TextAreaInput = ({
  onInputChange,
  placeholder,
  htmlFor,
  label,
  name,
  id,
}) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label htmlFor={htmlFor} className="text-lg md:text-2xl font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onInputChange}
        className="border border-black text-base md:text-lg p-2 rounded-md resize-none h-64"
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
