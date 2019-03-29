
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FILM_PENDING,
    REQUEST_FILM_FAILED,
    REQUEST_NOW_PLAYING,
    REQUEST_POPULAR_MOVIES,
    REQUEST_TOP_MOVIES,
    REQUEST_UPCOMING_MOVIES,
    REQUEST_AIRING_TODAY_TV,
    REQUEST_ON_AIR_TV,
    REQUEST_POPULAR_TV,
    REQUEST_TOP_TV,
    REQUEST_TRENDING
} from './constants.js';

export const searchFilm = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestFilm = (reqType) => (dispatch) => {
    dispatch({ type: REQUEST_FILM_PENDING });
    //GET INFO FORM API
    fetch(`http://localhost:3001/${reqType}`)
        .then(response => response.json())
        .then(data => {           
            const filmInfo = JSON.parse(data);
            //ADD TO STATE DEPENDING ON TYPE ON REQ FROM API
            switch (reqType){
                case 'nowPlayingMovies':
                    dispatch({ type: REQUEST_NOW_PLAYING, payload: filmInfo.results })
                    break;
                case 'popularMovies':
                    dispatch({ type: REQUEST_POPULAR_MOVIES, payload: filmInfo.results })
                    break;
                case 'topRatedMovies':
                    dispatch({ type: REQUEST_TOP_MOVIES, payload: filmInfo.results })
                    break;
                case 'upcomingMovies':
                    dispatch({ type: REQUEST_UPCOMING_MOVIES, payload: filmInfo.results })
                    break;
                case 'airingTodayTv':
                    dispatch({ type: REQUEST_AIRING_TODAY_TV, payload: filmInfo.results })
                    break;
                case 'onTheAirTv':
                    dispatch({ type: REQUEST_ON_AIR_TV, payload: filmInfo.results })
                    break;
                case 'popularTv':
                    dispatch({ type: REQUEST_POPULAR_TV, payload: filmInfo.results })
                    break;
                case 'topRatedTv':
                    dispatch({ type: REQUEST_TOP_TV, payload: filmInfo.results })
                    break;
                case 'trending':
                    dispatch({ type: REQUEST_TRENDING, payload: filmInfo.results })
                    break;
                default:
                    dispatch({ type: REQUEST_FILM_FAILED, payload: 'error' })
                    break;
            }
        })
        
        .catch(error => dispatch({ type: REQUEST_FILM_FAILED, payload: error }))
}
