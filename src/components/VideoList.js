import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const rendereList = props.videoList.map((video) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} video={video} />
    });

    return <div> {rendereList} </div>
}

export default VideoList