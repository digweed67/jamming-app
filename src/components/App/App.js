import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
 
 



function App() {
    return (
        <div> 
            <SearchBar />
            <div className="container">
                <SearchResults /> 
                
            </div>
        </div>

    )
}


export default App; 
