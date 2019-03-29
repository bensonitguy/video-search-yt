import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoClick}) => {

    return (
    <div onClick={() => onVideoClick(video)} key={video.id.videoId} className="video-item item">
                <img className="ui small image" src={video.snippet.thumbnails.medium.url}/>
                <div className="content">
                    <a className="header">{video.snippet.title}</a>
                    <div className="description">{video.snippet.description}</div>
                </div>
    </div>);    
};

export default VideoItem;