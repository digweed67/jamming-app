import React from "react";
import Track from '../Track/Track';



function Tracklist({ tracks, removeTrack }) {

    
    return (
        <div>
            {tracks.map(track => (
                <Track 
                    key={track.id}
                    track={track}
                    removeTrack={removeTrack}

                />
            ))}
        </div>
    );
};

export default Tracklist; 