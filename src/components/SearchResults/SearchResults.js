import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import Track from "../Track/Track";



function SearchResults() {
    const tracks = [
        {
            id: "1",
            name: "Last Christmas",
            artist: "Wham!",
            album: "Last Christmas - The Original"
        },
        {
            id: "2",
            name: "All I Want for Christmas Is You",
            artist: "Mariah Carey",
            album: "Merry Christmas"
        },
        {
            id: "3",
            name: "Do They Know It's Christmas?",
            artist: "Band Aid",
            album: "Do They Know It's Christmas?(Single)"
        },
        {
        id: "4",
        name: "Happy Xmas (War Is Over)",
        artist: "John Lennon & Yoko Ono",
        album: "Happy Xmas"
        }
        
    
    ];


    return (
        <div className="result-list">
            <Tracklist tracks={tracks}/>
        </div>
    );
}

export default SearchResults; 