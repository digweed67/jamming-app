import React, { useState } from "react";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

 
 



function App() {
    const [playlistName, setPlaylistName] = useState("My Playlist");
    const [playlistTracks, setPlaylistTracks] = useState(
        [
            {
                id: "5",
                name: "Ande Ande ",
                artist: "La Marimorena",
                album: "La Marimorena - Original",
                uri: "spotify:track:12345",
            },
            {
                id: "6",
                name: "Pero mira cómo beben",
                artist: "Los Peces en el río",
                album: "Éxitos de Navidad",
                uri: "spotify:track:67890",
            },
            {
                id: "7",
                name: "Belén Campanas de Belén",
                artist: "Los Ángeles",
                album: "Feliz Navidad (single)",
                uri: "spotify:track:11223",
            },
            
            
        
        ]
    );

    function addTrack(track) {
        const isTrackInPlaylist = playlistTracks.some(savedTrack => savedTrack.id === track.id);
        if (!isTrackInPlaylist) {
            setPlaylistTracks(prevTracks => [...prevTracks, track]);
            
        }
    
    }

    function removeTrack(track) {
        const updatedTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id); 

        setPlaylistTracks(updatedTracks);
    }

    return (
        <div> 
            <SearchBar />
            <div className="container">
                <SearchResults 
                    addTrack={addTrack}
                />
                <Playlist
                    playlistName={playlistName}
                    setPlaylistName={setPlaylistName}
                    playlistTracks={playlistTracks}
                    removeTrack={removeTrack}
                /> 
            </div>
        </div>

    )
}


export default App; 
