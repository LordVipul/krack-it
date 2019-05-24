import React, { Component } from "react";
import { Router, Link } from "@reach/router";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>
            krack<span>it.</span>{" "}
          </h1>
        </Link>

        <div className="button-container">
          <Link to="/about">
            <div className="about">
              <div className="about">
                <button>About</button>
              </div>
            </div>{" "}
          </Link>
          <a href="https://www.google.com">
            <div className="external">
              <div className="btn-bg">
                <button>View on Github</button>
              </div>
            </div>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
