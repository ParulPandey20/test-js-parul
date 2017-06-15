import {combineReducers} from 'redux';
import MoviesReducer from './movies-reducer';
import MoviesSortedReducer from './movies-sorted-reducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    movies: MoviesReducer,
    sortedMovies: MoviesSortedReducer
});

export default allReducers
