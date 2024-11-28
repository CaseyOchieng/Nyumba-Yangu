import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real Estate </span>
            <span className="text-slate-800"> {"Plug"}</span>
          </h1>
        </Link>
        {/* Other header content */}
        <form
          className="bg-slate-100 rounded-lg flex items-center"
          action="/search"
          method="get"
        >
          <input
            className="bg-transparent focus:outline-none p-2 w-24 sm:w-64"
            type="text"
            name="q"
            placeholder="Search"
          ></input>
          <FaSearch className="text-slate-600 mr-3 " />
        </form>
        {/* Other header content */}
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:text-slate-900 transition duration-200 ease-in-out">
            <Link to="/home">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:text-slate-900 transition duration-200 ease-in-out">
            <Link to="/about">About</Link>
          </li>
          <li className=" text-slate-700 hover:text-slate-900 transition duration-200 ease-in-out">
            <Link to="/signin">Log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
