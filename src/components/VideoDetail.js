import React from 'react';

const VideoDetail = ({video}) => {

   

    if(!video)
        return <div>No Video Selected Yet !!</div>
    else{
        const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return( 
        <div> 
            <div className="ui embed">
                <iframe titils={video.snippet.title} src={VideoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title} </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );
    }
     
};

export default VideoDetail;