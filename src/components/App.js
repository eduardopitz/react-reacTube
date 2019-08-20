import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: { q: term }
        })

        this.setState({ videos: response.data.items });
        this.setState({ selectedVideo: this.state.videos[0] });
    };

    onVideoSelect = async (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videoList={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App