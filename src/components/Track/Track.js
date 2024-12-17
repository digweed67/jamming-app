import React from "react"; 


function Track({ name, artist, album }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    );
}


export default Track; 