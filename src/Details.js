import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import getMovies from './Gallery-get';



export default class Details extends Component {
    
    constructor() {
        super();
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getMovies().find((movie) => movie.id === movieId);        
            this.setState ( { movie });
    }

    render () {
        if(this.state.movie === undefined) {
            return <Redirect to='./not-found' />;
        } else {

            return (
                <>
                    <h1>{this.state.movie.name}</h1>
                    <Link to='/'>  Back to home  </Link>
                </>
            );
        }
        
    }
}