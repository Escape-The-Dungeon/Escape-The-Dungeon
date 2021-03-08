import React, { useState } from "react";
import ytAPI from "../utils/ytAPI";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";
import VideoList from "../components/VideoList";
class Youtube extends React.Component {
    state = {
        videos:[],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await ytAPI.get('./search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video })
    }
    render() {
        return (
            <div className = 'ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className ='ui grid'>
                        <div className = 'ui row'>
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>

                            </div>
                            <div className="five wide column">
                                <VideoList handleVideoSelect = {this.handleVideoSelect}
                                videos={this.state.videos}/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Youtube; 



