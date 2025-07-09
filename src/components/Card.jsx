const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white rounded-md w-full h-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
