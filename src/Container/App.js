import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilm, requestFilm} from '../Redux/actions'; 
import CardList from '../Components/CardList';
import ScrollContainer from 'react-indiana-drag-scroll'
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

	componentDidMount() {
		//GET MOVIES
		this.props.onRequestFilm('nowPlayingMovies');
		this.props.onRequestFilm('popularMovies');
		this.props.onRequestFilm('topRatedMovies');
		this.props.onRequestFilm('upcomingMovies');

		//GET SERIES
		this.props.onRequestFilm('airingTodayTv');
		this.props.onRequestFilm('onTheAirTv');
		this.props.onRequestFilm('popularTv');
		this.props.onRequestFilm('topRatedTv');
		
	} 

	

  render() {
		const { isPending, nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies, airingTodayTv, onTheAirTv, popularTv, topRatedTv} = this.props;
		
    return (
      <div className="App">
			{ !isPending?(
				<>
				{/* MOVIES */}
						<Scroll header='Now Playing Movies' films={nowPlayingMovies}/>
						<Scroll header='Popular Movies' films={popularMovies} />
						<Scroll header='Upcoming Movies' films={upcomingMovies} />
						<Scroll header='Top Rated Movies' films={topRatedMovies} />
						{/* <h2 className='secondery-heading'>Now Playing Movies </h2>
						<ScrollContainer className="scroll-container">
							<CardList films={nowPlayingMovies} />
						</ScrollContainer>
						<h2 className='secondery-heading'>Popular Movies </h2>
						<ScrollContainer className="scroll-container">
							<CardList films={popularMovies} />
						</ScrollContainer>
						<h2 className='secondery-heading'>Upcoming Movies </h2>
						<ScrollContainer className="scroll-container">
							<CardList films={upcomingMovies} />
						</ScrollContainer>
						<h2 className='secondery-heading'>Top Rated Movies </h2>
						<ScrollContainer className="scroll-container">
							<CardList films={topRatedMovies} />
						</ScrollContainer>	 */}

					{/* SERIES */}
						<Scroll header='Series Aired Today' films={airingTodayTv} />
						<Scroll header='Series On The Air' films={onTheAirTv} />
						<Scroll header='Popular Series' films={popularTv} />
						<Scroll header='Top Rated Series' films={topRatedTv} />
						{/* <h2 className='secondery-heading'>Series Aired Today</h2>
						<ScrollContainer className="scroll-container">
							<CardList films={airingTodayTv} />
						</ScrollContainer>
						<h2 className='secondery-heading'>Series On The Air</h2>
						<ScrollContainer className="scroll-container">
							<CardList films={onTheAirTv} />
						</ScrollContainer>
						<h2 className='secondery-heading'>Popular Series </h2>
						<ScrollContainer className="scroll-container">
							<CardList films={popularTv} />
						</ScrollContainer>	
						<h2 className='secondery-heading'>Top Rated Series </h2>
						<ScrollContainer className="scroll-container">
							<CardList films={topRatedTv} />
						</ScrollContainer>	 */}
					</>
				)	:(
					<></>
				)
			}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( App);
