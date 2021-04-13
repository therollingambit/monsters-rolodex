import React, { Component } from "react";
import "./App.css";
//Components
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/Search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => { //arrow func binds to App
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; //destructuring
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
