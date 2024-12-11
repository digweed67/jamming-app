import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";


function App() {
    return (
        <div> 
            <SearchBar />
            <div className="container">
                <SearchResults /> 
                <Playlist />
            </div>
        </div>

    )
}


export default App; 
