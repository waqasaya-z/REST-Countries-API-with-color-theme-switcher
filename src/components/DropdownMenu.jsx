const DropdownMenu = ({selectedOption, handleChange, newTheme}) => {
   
   
    return ( 
        <>
        <select className={`${newTheme} p-3 w-3/4`} value={selectedOption} onChange={handleChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
      </select>
        </>
     );
}
 
export default DropdownMenu;