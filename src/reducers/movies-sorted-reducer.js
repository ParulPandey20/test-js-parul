import MoviesReducer from './movies-reducer';

export default function (state = null, action) {
 	switch (action.type) {
        case 'GET_MOVIES_SUCCESS':
        return sortMovies(state);
        break;
    }
	return state;
}

let sortMovies = function(state){
	var movies = MoviesReducer();
	if( Object.prototype.toString.call( movies ) === '[object Array]' ) {
    	var combinedMovies = [];
    	movies.map((movieArray) => combinedMovies = combinedMovies.concat(movieArray));
    	return combinedMovies.sort(sortFunction);
	}
	return state; 
}

let sortFunction = function(a,b){
    var aDate = new Date(a.releaseDate);
    var bDate = new Date(b.releaseDate);

    if(aDate.getFullYear() < bDate.getFullYear()){
        return -1;
    } else if(aDate.getFullYear() > bDate.getFullYear()){
        return 1;
    } else if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1;
    } else if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1;
    } else {
        return 0;
    }
}