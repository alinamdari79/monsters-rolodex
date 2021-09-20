import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };



  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))

  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredmonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
