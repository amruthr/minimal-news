import React, { Component } from 'react';
import {Button} from 'reactstrap';
class story extends Component {
	render() {
		let search = window.location.search;
		let params = new URLSearchParams(search);
		let url = params.get('q')
		return (
			<div style={{color:'white',backgroundImage:'linear-gradient(188deg , #000,#4b0000,  #f00, #f00, #f88, #fff, #fff)',padding:'20px',height:'350vh'}}>

		<iframe src={"https://outline.com/"+url} style={{width:'100%', height:'100vh'}}/>
</div>
		);
	}
}
export default story