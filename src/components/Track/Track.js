import React from "react"; 


function Track({ name, artist, album }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            <button>x</button>
        </div>
    );
}


export default Track; 