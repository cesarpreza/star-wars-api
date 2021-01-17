import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import Input from './components/Input'
import CharacterTable from './components/CharacterTable'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      characters: [],
    }
  }

async componentDidMount() {
  const peopleURL = `https://swapi.dev/api/people/`
  //const speciesURL = `https://swapi.dev/api/species/`
  const peopleResponse = await axios.get(peopleURL)
  //const speciesResponse = await axios.get(speciesURL)
  const characters = []
  for(const character of peopleResponse.data.results) {
    const homeWorldURL = character.homeworld.replace('http', 'https')
    const homeWorldResponse = await axios.get(homeWorldURL)
    const speciesURL = character.species
    const speciesResponse = await axios.get(speciesURL)

    character.homeworld = homeWorldResponse.data.name;
    //if species is greater than 0 then in if statement...
    if (speciesResponse.data.length === 0) {
      character.species = 'Human'
    } else {
      character.species = speciesResponse.data.name;

    }

    characters.push(character)
    this.setState({ characters })
  }
  
  
}


render() {
  console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Input />
        <CharacterTable characterData={this.state.characters}/>
      </div>
    );
  }
}

export default App;
