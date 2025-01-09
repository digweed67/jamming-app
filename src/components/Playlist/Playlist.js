import React from "react";
import Tracklist from "../Tracklist/Tracklist";



function Playlist({ playlistName, setPlaylistName, playlistTracks, removeTrack, savePlaylist }) {
    const handleChange = (event) => {
        const updatedPlaylistName = event.target.value; 
        setPlaylistName(updatedPlaylistName);

    }
    return (
        <div>
            <input type="text" id="playlist-name" value={playlistName} onChange={handleChange}></input>
            <Tracklist 
                tracks={playlistTracks} 
                removeTrack={removeTrack}
    
            />
            <button onClick={savePlaylist}>Save Playlist</button>
        </div>   
    );
};

export default Playlist; 