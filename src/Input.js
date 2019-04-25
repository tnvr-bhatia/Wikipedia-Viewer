import React, { Component } from "react";
import "./input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
    console.log(e.target.value);
  }

  submit(e) {
    e.preventDefault();
    this.props.search(this.state.search);
  }

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      if (this.state.search !== "") {
        this.submit(e);
      }
    }
  };

  render() {
    return (
      <div>
        <a
          className="text-white d-block m-2"
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for a random article
        </a>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          className="border borderColor input padding text-white"
          onKeyPress={this._handleKeyDown}
        />
        <p className="text-white m-2">Press Enter to Search</p>
      </div>
    );
  }
}

export default Input;
