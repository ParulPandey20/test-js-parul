import React from 'react'

class Movie extends React.Component {
	render () {
	    return (
	    	<div className = 'movieContentParent'>
	    		<div className = 'movieImageContent'>
	    			<img src={this.props.movie.image} />
	      		</div>
	      		<div className = 'movieContent'>
		      		<h2>{this.props.movie.title}</h2>
		      		<h3>Genre: {this.props.movie.genres}</h3>
		      		<h3><b>Rating: {this.props.movie.rating}</b></h3>
		      		<h3>Price: ${this.props.movie.price}</h3>
		      		<h3><i></i>Release Date: {formatDate(this.props.movie.releaseDate)}</h3>
		      	</div>
	      	</div>	
	    )
	}
}

var formatDate = function(releaseDate) {
	var date = new Date(releaseDate);
	var dd = date.getDate();
	var mm = date.getMonth()+1; //January is 0!

	var yyyy = date.getFullYear();
	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	var date = mm+'/'+dd+'/'+yyyy;
	return date;
}

export default (Movie)