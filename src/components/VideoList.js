import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos}) => { // es 2016 code to get videos from props.videos
    
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });

    return <div>{renderedList}</div>
};

export default VideoList;