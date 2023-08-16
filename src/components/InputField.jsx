import {AiOutlineSearch} from 'react-icons/ai';
const InputField = ({handleSearch , newTheme }) => {
    return (  
        <div className="text-lg ml-12 flex items-center">
        
            <input className={` ${newTheme} text-xs p-3 w-2/6 py-4 pl-10 shadow`} type="search" placeholder="Search for a country..."  onChange={handleSearch} />
            <div className='absolute left-16 pl-10'> <AiOutlineSearch /> </div>
        </div>
    );
}
 
export default InputField;
