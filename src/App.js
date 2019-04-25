import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import Card from "./Card";

var results = [];
const API =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=";
class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: "",
      pageInfo: []
    };

    this.setSearch = this.setSearch.bind(this);
    this.getWikiArticle = this.getWikiArticle.bind(this);
    this.parseArticle = this.parseArticle.bind(this);
  }

  setSearch(text) {
    this.setState(
      {
        search: text
      },
      () => {
        this.getWikiArticle();
      }
    );
  }

  componentDidMount() {
    console.log("component Mount");
  }

  getWikiArticle() {
    console.log(API + this.state.search);
    fetch(API + this.state.search)
      .then(response => response.json())
      .then(data => this.parseArticle(data.query.pages));
  }

  parseArticle(pages) {
    var page = [];
    for (let item in pages) {
      page.push(pages[item]);
    }
    this.setState({
      pageInfo: page
    });
  }

  render() {
    console.log(this.state.pageInfo);
    return (
      <div className="App">
        <div className="wrapper">
          <Input search={this.setSearch} />
        </div>
        <div className="cardGrid">
          {this.state.pageInfo.map((item, index) => (
            <Card
              title={item.title}
              extract={item.extract}
              href={item.pageid}
              imgSrc={
                item.hasOwnProperty("thumbnail")
                  ? item.thumbnail.source
                  : "http://identicon.org?t=missing&s=75"
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
