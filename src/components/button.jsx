const Button = ({ children, onClick }) => {
  const style = `bg-green-950 hover:bg-green-800 transition-all duration-200 hover:text-white w-52 h-16 mt-5 text-xl text-[#e1e3de] rounded-md`;
  return <button className={style}>{children}</button>;
};
export default Button;
