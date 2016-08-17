import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA6JYGjdfKtEKDK27h2hC3dJKohVXzFSGg';

// Create a new component
// This will make some HTML

// here App is a functional component because it does not have any state
//const App = function(){
// const App = () =>{ //EC6 function
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
	
// }

class App extends Component {  //EC6 function

	constructor(props){
		super(props);
		this.state = { 
			videos: [], 
			selectedVideo: null 
		};

		// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
		// 	this.setState({videos: data});
		// 	//console.log(data);
		// });

		// above can be done as
		// YTSearch({key: API_KEY, term: 'a-kay hummer '}, (videos) => {
		// 	this.setState({ 
		// 		videos: videos,
		// 		selectedVideo: videos[0] 
		// 	});
		// 	//console.log(this.setState({ videos }));
		// });
this.videoSearch('a-kay hummer');
	}


videoSearch(term){
			YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
			//console.log(this.setState({ videos }));
		});

}


	render(){

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
				<VideoDetail video = {this.state.selectedVideo} />

				<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}


// Take this generated HTML and put on DOM

//React.render(App); // React is used to create and manage components
//ReactDOM.render(App); //ReactDOM is used to interact with actual DOM

//This is JSX tag
//ReactDOM.render(<App />); // By doing so we are passing the instance, not the App class(as above)

ReactDOM.render(<App /> , document.querySelector('.container')); // This appends the component to the container class of the index.html, because everything at the end goes to this index age and will be appended
