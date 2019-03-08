
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FILM_PENDING,
    REQUEST_FILM_SUCCESS,
    REQUEST_FILM_FAILED,
    REQUEST_NOW_PLAYING,
    REQUEST_POPULER_MOVIES,
    REQUEST_TOP_MOVIES,
    REQUEST_UPCOMMING_MOVIES,
    REQUEST_AIRING_TODAY_TV,
    REQUEST_ON_AIR_TV,
    REQUEST_POPULER_TV,
    REQUEST_TOP_TV
} from './constants.js';

export const searchFilm = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestFilm = (reqType) => (dispatch) => {
    dispatch({ type: REQUEST_FILM_PENDING });
    fetch(`http://localhost:3001/${reqType}`)
        .then(response => response.json())
        .then(data => {
           // console.log(data)
            const filmInfo = JSON.parse(data);
            //console.log(filmInfo.results)
            switch (reqType){
                case 'nowPlayingMovies':
                    dispatch({ type: REQUEST_NOW_PLAYING, payload: filmInfo.results })
                    break;
                case 'popularMovies':
                    dispatch({ type: REQUEST_POPULER_MOVIES, payload: filmInfo.results })
                    break;
                case 'topRatedMovies':
                    dispatch({ type: REQUEST_TOP_MOVIES, payload: filmInfo.results })
                    break;
                case 'upcomingMovies':
                    dispatch({ type: REQUEST_UPCOMMING_MOVIES, payload: filmInfo.results })
                    break;
                case 'airingTodayTv':
                    dispatch({ type: REQUEST_AIRING_TODAY_TV, payload: filmInfo.results })
                    break;
                case 'onTheAirTv':
                    dispatch({ type: REQUEST_ON_AIR_TV, payload: filmInfo.results })
                    break;
                case 'popularTv':
                    dispatch({ type: REQUEST_POPULER_TV, payload: filmInfo.results })
                    break;
                case 'topRatedTv':
                    dispatch({ type: REQUEST_TOP_TV, payload: filmInfo.results })
                    break;
                default:
                    dispatch({ type: REQUEST_FILM_FAILED, payload: 'error' })
                    break;
            }
            
        })
        .catch(error => dispatch({ type: REQUEST_FILM_FAILED, payload: error }))
}
