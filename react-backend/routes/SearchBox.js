import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchBox extends Component{
	constructor(props){
		super(props);
	}
}

onKeyPress(evt) {
	if(evt.key==="Enter") {
		this.props.onSearch(evt.target.value);
	}
}

render()
{
	return (<div classname="SearcBox">
			<input type="text"
			ref ={(input)=> this.input=input}
			defaultValue
		)
}

SearcBox.PropTypes = {
	onSearch: PropTypes.func.isRequired,
	user: PropTypes.string.isRequired
};

export default  SearchBox;