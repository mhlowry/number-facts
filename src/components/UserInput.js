import { useState } from "react";
import Fact from './Fact';

const UserInput = () => {
    const [inputValue, setInputValue] = useState(0);
    const [currentFact, setFact] = useState('0 is the atomic number of the theoretical element tetraneutron.');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await fetchNumberFact(inputValue);
            setFact(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchNumberFact = async (num) => {
        const result = await fetch(`http://numbersapi.com/${num}`);
        if (!result.ok)
        {
            throw Error("Network response was not ok")
        }
        return result.text();
    }

    return (
        <>
            <form className="user-input-form flex-col mb-10" onSubmit={ handleSubmit }>
                <div className="flex-grow">
                    <label htmlFor="number" className="block text-xl mb-2 font-medium text-gray-900 dark:text-white">Enter number</label>
                    <input
                        type="number"
                        id="number"
                        className="bg-gray-50  mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" 
                        placeholder="0"
                        onChange={ handleInput }
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
            <Fact fact={ currentFact } />
        </>
    );
}

export default UserInput;
