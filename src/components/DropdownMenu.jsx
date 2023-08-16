const DropdownMenu = ({selectedOption, handleChange}) => {
   
   
    return ( 
        <>
        <select value={selectedOption} onChange={handleChange}>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
      </select>
        </>
     );
}
 
export default DropdownMenu;