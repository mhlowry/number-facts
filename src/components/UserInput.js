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
            <form className="user-input-form flex flex-col items-center mb-10 p-4 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto" onSubmit={ handleSubmit }>
                <div className="w-full mb-4">
                    <label htmlFor="number" className="block text-xl mb-2 font-medium text-gray-900">Enter number</label>
                    <input
                        type="number"
                        id="number"
                        className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-center" 
                        placeholder="0"
                        min={0}
                        onChange={ handleInput }
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
            <Fact fact={ currentFact } />
        </>
    );
}

export default UserInput;
