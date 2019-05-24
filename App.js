import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import SearchResults from "./components/SearchResults";

export class App extends Component {
  // context and state here instead of landing

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Landing path="/" />
          <About path="/about" />
          <SearchResults path="/search" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
