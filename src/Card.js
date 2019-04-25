import React, { Component } from "react";
import "./Card.css";

const PAGE_URL = "https://en.wikipedia.org/?curid=";

class Card extends Component {
  render() {
    return (
      <a
        className="card"
        href={PAGE_URL + this.props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="thumbnail">
          <img src={this.props.imgSrc} alt="" className="img" />
        </div>
        <div>
          <h2>{this.props.title}</h2>
          <p className="text-muted">{this.props.extract}</p>
        </div>
      </a>
    );
  }
}

export default Card;
