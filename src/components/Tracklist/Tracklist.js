import React from "react";
import Track from '../Track/Track';



function Tracklist({ tracks, removeTrack, addTrack }) {

    
    return (
        <div>
            {tracks.map(track => (
                <Track 
                    key={track.id}
                    track={track}
                    removeTrack={removeTrack}
                    addTrack={addTrack}

                />
            ))}
        </div>
    );
};

export default Tracklist; 