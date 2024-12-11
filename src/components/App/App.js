import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';  
import Playlist from '../Playlist/Playlist';  



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
