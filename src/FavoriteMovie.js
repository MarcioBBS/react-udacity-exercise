import React, {Component} from 'react';

class FavoriteMovie extends Component {
	render() {
      	console.log(this.props.profiles);
      	console.log(this.props.users);
      	console.log(this.props.movies);
      
    	const profilesArr = this.props.profiles;
      	const usersOjb = this.props.users;
      	const moviesObj = this.props.movies;
    	return (
        	<ol>
          		{profilesArr.map(profile => (
                 	<li key= {profile.userID}>
                 		{usersOjb[profile.userID]}
                 	</li>
                 ))}
            </ol>
        )
    }
}

export default FavoriteMovie;