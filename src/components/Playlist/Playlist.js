import React from "react";
import Tracklist from "../Tracklist/Tracklist";



function Playlist({ playlistName, playlistTracks, removeTrack }) {
    return (
        <div>
            <h2>{playlistName}</h2>
            <Tracklist 
                tracks={playlistTracks} 
                removeTrack={removeTrack}
            />
        </div>   
    );
};

export default Playlist; 