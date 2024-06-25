import { FaMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header({ onClick }) {
  return (
    <header className="w-full py-6 bg-white shadow-md shadow-stone-500/10 dark:shadow-stone-800/70 dark:bg-dark-blue">
      <div className="flex items-center justify-between primaryContainer">
        <h2 className="text-md dark:text-white sm:text-2xl text-very-dark-blue-text font-800 ">
          <Link to="/">Where in the world?</Link>
        </h2>
        <button
          className="flex items-center gap-2 text-sm cursor-pointer dark:text-white sm:text-lg text-very-dark-blue-text font-600"
          onClick={onClick}
        >
          <FaMoon />
          Switch Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
