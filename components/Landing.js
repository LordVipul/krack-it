import React, { Component } from "react";
import axios from "axios";

import SearchResults from "./SearchResults";
import Movie from "./Movie";

var API_KEY = "98df410d";

export class Landing extends Component {
  // make state a property of App
  state = {
    searchQuery: "",
    searchResData: []
  };

  handleSubmit = e => {
    event.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchQuery}`
      )
      .then(results => {
        this.setState({ searchQuery: "", searchResData: results.data.Search });
        console.log(this.state.searchResData);
      });
  };

  handleChange = e => this.setState({ searchQuery: e.target.value });

  render() {
    return (
      <div className="main">
        <h1>Quick details about any movie</h1>
        <h3>Get cast, IMDb ratings and more, just type below</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
            placeholder="What movie do you wanna search for?"
          />
          <button type="submit" value="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Landing;
