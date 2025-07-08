const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-md w-full h-auto ${className}`}>
      {children}
    </div>
  );
};

export default Card;
