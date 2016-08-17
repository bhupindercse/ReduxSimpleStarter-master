import React, { Component } from 'react';


class SearchBar extends Component {
//class SearchBar extends React.Component {
// * Functional Components do not have State only Class based components have
constructor(props){
	super(props);
	//only inside constructor we can change state
	this.state = {term: ''};
}

	//must have render method
	render() {
	//must return
	//return <input onChange={this.onInputChange} />;
	//return <input onChange={(event) => console.log(event.target.value)} />; // we can remove ( and ) around (events)
		return (
			// <div>
			// 	<input 
			// 		value={this.state.term}
			// 		onChange={event => this.setState({term: event.target.value})} />
			// 		Value of Input: {this.state.term}
			// </div>
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
					Value of Input: {this.state.term}
			</div>
		);
	}

	//this method is called when Input Changes
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}

// const SearchBar = () => {
// 	return <input /> ;
// };


export default SearchBar;