import React from "react"; 


function Track({ track, removeTrack }) {
    console.log(removeTrack);
    function handleClick() {
        removeTrack(track);
    }
    return (
        <div>
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={handleClick}>x</button>
        </div>
    );
}


export default Track; 