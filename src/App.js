import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import CharacterTable from './components/CharacterTable';
import Pagination from './components/Pagination';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      currentPage: 1,
      characters: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.dev/api/people/`)
  }
  
  handleInput(searchTerm) {
    this.getCharacters(`https://swapi.dev/api/people/?search=${searchTerm}`)
}

  async getCharacters(url) {
    const peopleResponse = await axios.get(url);
    const characters = peopleResponse.data.results;

  for(const character of characters) {
    const homeWorldURL = character.homeworld.replace('http', 'https');
    const homeWorldResponse = await axios.get(homeWorldURL);
    character.homeworld = homeWorldResponse.data.name;

    if (character.species.length === 0) {
      character.species = 'Human';
    } else {
      const speciesURL = character.species[0].replace('http', 'https');
      const speciesResponse = await axios.get(speciesURL);
      character.species = speciesResponse.data.name;
    }
  }
    this.setState({ characters, isLoading: false });
  }

  handleNextPage(pageNum) {
    this.setState({isLoading: true})
    const nextPageUrl = `http://swapi.dev/api/people/?page=${pageNum}`
    this.getCharacters(nextPageUrl);
    console.log(nextPageUrl);
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <Input handleInput={this.handleInput} />
        <CharacterTable characterData={this.state.characters} isLoading={this.state.isLoading} />
        <Pagination handleNextPage={this.handleNextPage} />
        
      </div>
    );
  }
}

export default App;
