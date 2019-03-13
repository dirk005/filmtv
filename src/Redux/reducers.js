import {
    CHANGE_SEARCH_FIELD,
    REQUEST_FILM_PENDING,
    REQUEST_FILM_SUCCESS,
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

//START WITH BLANK SEARCH
const initialStateSearch = {
    searchField: ''
}

export const searchFilm = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateFilm = {
    isPending: false,
    nowPlayingMovies: [],
    popularMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
    airingTodayTv:[],
    onTheAirTv:[],
    popularTv:[],
    topRatedTv:[],
    trending:[],
    error: ''
}

export const requestFilm = (state = initialStateFilm, action = {}) => {
   
    switch (action.type) {
        case REQUEST_FILM_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_FILM_SUCCESS:
            return Object.assign({}, state, { reqType : action.payload })
        case REQUEST_NOW_PLAYING:
            return Object.assign({}, state, { nowPlayingMovies: action.payload })
        case REQUEST_POPULAR_MOVIES:
            return Object.assign({}, state, { popularMovies: action.payload })
        case REQUEST_TOP_MOVIES:
            return Object.assign({}, state, { topRatedMovies: action.payload })
        case REQUEST_UPCOMING_MOVIES:
            return Object.assign({}, state, { upcomingMovies: action.payload })
        case REQUEST_AIRING_TODAY_TV:
            return Object.assign({}, state, { airingTodayTv: action.payload })
        case REQUEST_ON_AIR_TV:
            return Object.assign({}, state, { onTheAirTv: action.payload })
        case REQUEST_POPULAR_TV:
            return Object.assign({}, state, { popularTv: action.payload })
        case REQUEST_TOP_TV:
            return Object.assign({}, state, { topRatedTv: action.payload })
        case REQUEST_TRENDING:
            return Object.assign({}, state, { trending: action.payload, isPending: false })
        case REQUEST_FILM_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        
        default:
            return state;
    }
}
