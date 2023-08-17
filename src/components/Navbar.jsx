import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const Navbar = ({ handleClick, newTheme, text, themeIcon }) => {
  return (
    <div className={`${newTheme} flex justify-between p-5`}>
      <div className={`text-2xl font-bold ${text} ml-12 pl-5`}>
        Where in the world?
      </div>
      <div
        className="mr-12 pr-5 flex items-center hover:cursor-pointer"
        onClick={handleClick}
      >
        <div className="mr-2">
         { !themeIcon && <BsMoon />}
        { themeIcon && <BiSun />}
        </div>
      { !themeIcon &&  <p> Dark Mode </p>}
      { themeIcon &&  <p> Light Mode </p>}
      </div>
    </div>
  );
};

export default Navbar;
