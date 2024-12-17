import React, { useState }  from 'react'; 


function SearchBar() {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {

        setUserInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        // fetch data from API

    }


    return (
        <div className="search-bar-container">
            <input 
                type="text" 
                id="userInput" 
                value={userInput} 
                onChange={handleChange} 
                placeholder="Search for songs"
            />

            <button 
                type="submit" 
                id="button" 
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar; 