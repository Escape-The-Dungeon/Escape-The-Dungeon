import React from 'react';
import './video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div id="one" className='header '>{video.snippet.title}</div>
                <div id="one">----------------------</div>
            </div>
        </div>
    )
};
export default VideoItem;