import { ADD_MOVIE, DELETE_MOVIE } from '../constants/action-types'

export function addMovie(payload){
    return { type: ADD_MOVIE , payload}
};

export function deleteMovie(id){
    return { type: DELETE_MOVIE , id}
};
