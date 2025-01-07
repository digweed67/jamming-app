import React from "react";
import Track from '../Track/Track';



function Tracklist({ tracks, removeTrack }) {

    
    return (
        <div>
            {tracks.map(track => (
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    removeTrack={removeTrack}

                />
            ))}
        </div>
    );
};

export default Tracklist; 