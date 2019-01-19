import React from 'react'

const VideoDetail = ({video}) => {
    if (video && video.snippet && video.snippet.title) {
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe width="560" height="315" src={videoUrl} frameBorder="0" title="Video Player"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen">
                    </iframe>

                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {video.snippet.title}
                    </h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
    }
    return ''
}

export default VideoDetail