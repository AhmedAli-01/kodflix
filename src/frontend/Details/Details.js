import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import getMovies from "../Gallery-get";
import "./Details.css";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = getMovies().find(movie => movie.id === movieId);
    this.setState({
      movie
    });
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to="./not-found" />;
    } else {
      return (
        <div className="Details">
          <h1>{this.state.movie.name}</h1>
          <div className="content">
            <div className="text"> {this.state.movie.details} </div>
            <img
              className="image"
              src={this.state.movie.logo}
              alt={this.state.movie.name}
            />
          </div>
          <Link to="/"> Back to home </Link>
        </div>
      );
    }
  }
}
