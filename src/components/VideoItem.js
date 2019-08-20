import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ () => onVideoSelect(video) } className="video-item ui card">
            <div className="image">
                <img src={video.snippet.thumbnails.medium.url} alt="Prévia" />
            </div>
            <div className="content">
                {video.snippet.title} 

                <div className="meta">
                    <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
        </div>
    ); 
}

export default VideoItem