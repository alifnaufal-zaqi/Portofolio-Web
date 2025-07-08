const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-md w-[256] h-[320]`}>{children}</div>
  );
};

export default Card;
