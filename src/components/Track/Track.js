import React from "react"; 


function Track({ track, removeTrack, addTrack }) {
    
    function handleClick() {
        removeTrack(track);
    }

    function handleAdd() {
        addTrack(track);
    }
    return (
        <div>
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={handleClick}>x</button>
            <button onClick={handleAdd}>+</button>
        </div>
    );
}


export default Track; 