const Button = ({ children, className, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`bg-secondary w-fit px-4 py-2 text-center border border-secondary hover:bg-transparent rounded-md text-white hover:text-black transition-all ease-in-out duration-150 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
