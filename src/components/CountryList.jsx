const CountryList = ({filteredCountries , theme, text}) => {
    return ( 
        <>
        {filteredCountries.map((key, index) => (
   <div
     key={index}
     className={`${theme} max-w-xs rounded shadow-lg mb-4 `}
   >
     <img className="w-full" src={key.flags.svg} alt={key.name} />
     <div className={` ${text} px-6 py-4"`}>
       <div className="font-bold text-xl mb-2">{key.name}</div>
       <p className=" text-base">Population: {key.population}</p>
       <p className=" text-base">Region: {key.region}</p>
       <p className=" text-base">Capital: {key.capital}</p>
     </div>
   </div>
 ))}
        </>
     );
}
 
export default CountryList;

