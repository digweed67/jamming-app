import React from "react";
import Tracklist from "../Tracklist/Tracklist";



function Playlist({ playlistName, playlistTracks, removeTrack }) {
    return (
        <div>
            <input type="text" id="playlist-name" value={playlistName}></input>
            <Tracklist 
                tracks={playlistTracks} 
                removeTrack={removeTrack}
            />
        </div>   
    );
};

export default Playlist; 