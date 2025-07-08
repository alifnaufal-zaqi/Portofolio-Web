const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-secondary p-2 border border-secondary hover:bg-transparent rounded-md text-white hover:text-black transition-all ease-in-out duration-150 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
