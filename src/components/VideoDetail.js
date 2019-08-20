import React from 'react';
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className='video-detail ui segment'> 
            <div className="ui embed ">
                <iframe src={videoSrc} title={video.snippet.title} />
            </div>
            <div className='video-description'>
                <h4 className='ui header'> {video.snippet.title} </h4> 
                <p> {video.snippet.description} </p>
            </div>
        </div>
    );
}

export default VideoDetail