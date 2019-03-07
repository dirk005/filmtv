import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../Redux/actions'; //functions


const mapStateToProps = state => {
	return{
		// searchField : state.searchRobots.searchField,
		// robots: state.requestRobots.robots,
		// isPending: state.requestRobots.isPending,
		// error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
	 //	onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
		//onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( App);
