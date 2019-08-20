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
                    <span className="date"> {video.snippet.publishedAt} </span>
                </div>
                <div className="description">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    ); 
}

export default VideoItem