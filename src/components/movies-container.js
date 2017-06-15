import React from 'react'
import { connect } from 'react-redux'
import Movie from './movie'

export function MoviesContainer(props) {
	if(!props.sortedMovies){
		return (
			<div>Please click button...</div>
		);
	}

	return (
        <div>
        	{getComp(props)}
        </div>
    )
}

function getComp(props){
	var i = 0;
	return props.sortedMovies.map((movie) => {
  		i++;

  		return (
  			<div className='movieContainer' key={++i}>
  				<Movie movie={movie}/>
  			</div>
  		);
  	});
}
function mapStateToProps(state) {
    return {
        sortedMovies: state.sortedMovies
    };
}

export default connect(mapStateToProps)(MoviesContainer)
