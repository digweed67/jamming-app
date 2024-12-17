import React from "react";
import Tracklist from '../Tracklist/Tracklist';





function SearchResults() {


    return (
        <div className="result-list">
            <Tracklist tracks={tracks}/>
        </div>
    );
}

export default SearchResults; 