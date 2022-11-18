import React, { Component } from 'react';
import Map from '../../components/Map/Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: -6.208250, lng: 106.808739}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;