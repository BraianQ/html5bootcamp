import { ADD_MOVIE , DELETE_MOVIE } from '../constants/action-types'
const initialstate = {
    movies : []
};

function rootReducer( state = initialstate, action){
    if ( ADD_MOVIE === action.type){
        return Object.assign({}, {movies : state.movies.concat(action.payload)})
    }

    if (DELETE_MOVIE === action.type){
        let copyMovies = {...state.movies};
        delete copyMovies[action.id];
        let newState = {
            ...state,
            movies: copyMovies,
        }
        return newState;
    }
    return state;
};

export default rootReducer;