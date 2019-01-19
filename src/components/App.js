import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchVideos from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component {
    state = {videos: [], selectedVideo: null}

    componentDidMount () {
        this.onSearchSubmit('new punjabi songs')
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await SearchVideos(searchTerm)

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }

    onVideoSelect = video => this.setState({selectedVideo: video})

    render () {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}