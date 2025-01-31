const Button = ({ children, customClass, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`${customClass} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-base-200 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 transition duration-300 md:py-2 py-1.5 md:px-5 px-4 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
