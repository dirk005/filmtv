import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilm, requestFilm} from '../Redux/actions'; 
import Header from '../Components/Header';
import Scroll from '../Components/Scroll';


const mapStateToProps = state => {
	return{
		searchField : state.searchFilm.searchField,
		nowPlayingMovies: state.requestFilm.nowPlayingMovies,
		popularMovies: state.requestFilm.popularMovies,
		topRatedMovies: state.requestFilm.topRatedMovies,
		upcomingMovies: state.requestFilm.upcomingMovies,
		airingTodayTv: state.requestFilm.airingTodayTv,
		onTheAirTv: state.requestFilm.onTheAirTv,
		popularTv: state.requestFilm.popularTv,
		topRatedTv: state.requestFilm.topRatedTv,
		isPending: state.requestFilm.isPending,
		error: state.requestFilm.error
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(searchFilm(event.target.value)),
		onRequestFilm: (reqType) => dispatch(requestFilm(reqType))
	}
}

class App extends Component {
	constructor(){
		super();
		this.state ={
			pages : [
				{
					page :'nowPlayingMovies',
					heading:'Now Playing Movies'
				},
				{
					page :'popularMovies',
					heading:'Trending Movies' 
				},
				{
					page :'topRatedMovies',
					heading:'Top Rated Movies'
				},
				{
					page :'upcomingMovies',
					heading:'Upcoming Movies'
				},
				{
					page :'airingTodayTv',
					heading:'Series Aired Today'
				},
				{
					page :'onTheAirTv',
					heading:'Series On The Air' 
				},
				{
					page :'popularTv',
					heading:'Trending Series'
				},
				{
					page :'topRatedTv',
					heading:'Top Rated Series'
				}

			]
		}
	}

	componentDidMount() {

		const pages = this.state.pages;
		
		pages.map((page,i) => {			
			return this.props.onRequestFilm(page.page);			
		})
		
	} 

	

  render() {
		const { isPending } = this.props;
		const { pages } = this.state;

    return (
      <div className="App">
			{ !isPending?(
				 <>
				 	<Header/>
				 	{ //display all pages form props
				 		pages.map((page,i) => {	
							 let pageLink = page.page;		
				 		 	 return <Scroll className='scroll' key={i} header={page.heading} films={this.props[pageLink]}/>
				 		 })
					 }					
				</>
				):(
					<>
					{
						//loading 
					}
					</>
				)
			}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( App);
