import React, { useState } from "react";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
 
 



function App() {
    const [playlistName, setPlaylistName] = useState("My Playlist");
    const [playlistTracks, setPlaylistTracks] = useState(
        [
            {
                id: "1",
                name: "Ande Ande ",
                artist: "La Marimorena",
                album: "La Marimorena - Original"
            },
            {
                id: "2",
                name: "Pero mira cómo beben",
                artist: "Los Peces en el río",
                album: "Éxitos de Navidad"
            },
            {
                id: "3",
                name: "Belén Campanas de Belén",
                artist: "Los Ángeles",
                album: "Feliz Navidad (single)"
            },
            
            
        
        ]
    );



    return (
        <div> 
            <SearchBar />
            <div className="container">
                <SearchResults />
                <Playlist
                playlistName={playlistName}
                playlistTracks={playlistTracks}
                /> 
            </div>
        </div>

    )
}


export default App; 
