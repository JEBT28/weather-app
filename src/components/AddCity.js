import React, {useState} from "react";
import propTypes from 'prop-types';
import {ReactComponent as SearchImg} from '../img/search.svg';

export const AddCity = ({setSelections, cities}) => {


    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
            setInputValue(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        const city = cities.find(city => city.city.toUpperCase() === inputValue.toUpperCase() )
        if(city !== undefined)
        {
            setSelections(selections => [...selections, city.id]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full h-auto max-w-sm text-sm p-2 rounded-xl border-2 border-white bg-white mt-2">
                <input className="w-11/12 focus-within:outline-none text-black"
                       type="text"
                       value={inputValue}
                       onChange={(e) => handleInputChange(e)}
                       placeholder="Type a city..."
                       id={"inputCity"}/>
               <SearchImg className="w-1/12 h-full"/>
            </div>
        </form>
    );

};


AddCity.propTypes = {
    setSelections: propTypes.func.isRequired
}