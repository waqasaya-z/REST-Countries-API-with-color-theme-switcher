import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./data/data.json";
import CountryList from "./components/CountryList";
import InputField from "./components/InputField";
import Navbar from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu";
function App() {
  const [restData, setRestData] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("bg-slate-50");
  const [newTheme, setNewTheme] = useState("bg-white");
  const [text, setText] = useState("text-black");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleClick = () => {
    // setTheme(theme === "slate-50" ? "black" : "slate-50");
    setTheme((prevTheme) =>
      prevTheme === "bg-slate-50" ? "bg-gray-800" : "bg-slate-50"
    );
    setNewTheme((prevTheme) =>
      prevTheme === "bg-white" ? "bg-gray-700" : "bg-white"
    );
    setText((prevText) =>
      prevText === "text-black" ? "text-white" : "text-black"
    );
  };

  useEffect(() => {
    setRestData(data);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const filterCountries = () => {
      if(search) {
          
      }
      else if (selectedOption === "") {
        setFilteredCountries(data);
      } else {
        const filtered = data.filter(
          (country) => country.region === selectedOption
        );
        setFilteredCountries(filtered);
      }
    };

    filterCountries();
  }, [selectedOption]);

  const searchCountry = filteredCountries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });
  
  return (
    <>
      <Navbar handleClick={handleClick} newTheme={newTheme} text={text} />

      <div>
        <div className={`${theme} p-12 flex justify-between`}>
          <div className="w-3/4">
            {" "}
            <InputField handleSearch={handleSearch} newTheme={newTheme} />{" "}
          </div>
          <div className="w-1/6">
            {" "}
            <DropdownMenu
              handleChange={handleChange}
              selectedOption={selectedOption}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CountryList
            filteredCountries={searchCountry}
            theme={theme}
            text={text}
          />
        </div>
      </div>
    </>
  );
}

export default App;
