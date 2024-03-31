const Button = ({ children, onClick, style }) => {
  const defaultStyle = `  transition-all duration-200 w-52 h-16 mt-5 hover:bg-green-400  text-[#e1e3de] rounded-md`;
  return (
    <button className={`${defaultStyle} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
