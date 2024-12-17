import React from "react";
import Track from '../Track/Track';



function Tracklist({ tracks = [] }) {
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
        <div>
            {tracks.map(track => (
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                />
            ))}
        </div>
    );
};

export default Tracklist; 