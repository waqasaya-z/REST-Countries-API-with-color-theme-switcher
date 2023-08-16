import { IoIosArrowDown } from "react-icons/io";
const Dropdown = ({ text, newTheme, handleCountry }) => {
  return (
    <>
      <button
        className={`relative dropdown:block flex items-center justify-between ${newTheme} p-2 w-full`}
        role="navigation"
        aria-haspopup="true"
      >
        <span className={`pl-2 text-md ${text} `}> Filter by Region </span>{" "}
        <IoIosArrowDown />
        <ul
          className={` ${text} ${newTheme} absolute top-8 right-0 hidden w-full p-2 `}
          aria-label="submenu"
        >
          <li
            className="hover:bg-slate-400"
            onClick={() => handleCountry("Africa")}
          >
            <a href="#">Africa</a>
          </li>
          <li
            className="hover:bg-slate-400"
            onClick={() => handleCountry("Americas")}
          >
            <a href="#"> America</a>
          </li>
          <li
            className="hover:bg-slate-400"
            onClick={() => handleCountry("Asia")}
          >
            <a href="#"> Asia </a>
          </li>
          <li
            className="hover:bg-slate-400"
            onClick={() => handleCountry("Europe")}
          >
            <a href="#"> Europe </a>
          </li>
          <li
            className="hover:bg-slate-400"
            onClick={() => handleCountry("Oceania")}
          >
            <a href="#"> Oceania </a>
          </li>
        </ul>
      </button>
    </>
  );
};

export default Dropdown;
