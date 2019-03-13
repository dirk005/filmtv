import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilm, requestFilm} from '../Redux/actions';  //GET FROM REDUX

//GET COMPONENTS
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import Scroll from '../Components/Scroll';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';


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
		trending: state.requestFilm.trending,
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
					page : 'trending',
					heading : 'Trending Movie & Series'
				},
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
		//GET ALL PAGES AND ADD TO REDUX STATE
		pages.map((page,i) => {			
			return this.props.onRequestFilm(page.page);			
		});		
	} 
	

  render() {
		const { isPending ,trending } = this.props;
		const { pages } = this.state;
		const displayFilms = pages.filter((data,i)=> {
			return i=== 0 || i=== 2 || i===3 || i===7 ||i ===8 ? data : false;
		});
		const newFilms = trending.reverse().filter((data,i) =>i<=5? data :false);

    return (
      <div className="App">
			{ !isPending?(
				 <>
				 	<Navigation/>
				 	<Header films={newFilms}/>

				 	{ //Display all pages(Movies and series) form props
				 		displayFilms.map((page,i) => {	
							 let pageLink = page.page;		
				 		 	 return <Scroll className='scroll' key={i} header={page.heading} films={this.props[pageLink]}/>
				 		 })
					 }	
					 <Footer/>				
				</>
				):(
					<>
						{
							//LOADING
						}
						<Loader/>
					</>
				)
			}
			
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( App);
