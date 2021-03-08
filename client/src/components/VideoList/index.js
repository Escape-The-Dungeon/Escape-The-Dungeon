import React from 'react';
import VideoItem from '../VideoItem';
import "../VideoDetail/style.css";

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        
    });
    return <div id="one" className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;