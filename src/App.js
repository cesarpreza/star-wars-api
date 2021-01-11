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
      homeWorld: []
    }
  }

async componentDidMount() {
  // get first ten people back
  const peopleURL = `https://swapi.dev/api/people/`
  const homeWorldURL = `https://swapi.dev/api/planets/`
  const speciesURL = `https://swapi.dev/api/species/`
  const peopleResponse = await axios.get(peopleURL)
  const speciesResponse = await axios.get(speciesURL)
  console.log(peopleResponse.data.results)
  console.log(speciesResponse.data.results)

  for(const people of peopleResponse.data.results) {
    const homeWorldResponse = await axios.get(homeWorldURL)
    people.homeWorldResponse = homeWorldResponse.data.results;
    console.log(homeWorldResponse.data.results)
  }
   // loop through each character
    // make an http request for the character's homeworld
      // set the homeworldName of the character to the response data
  // update state
    // set characters in state to characters variable

}

// componentDidMount() {
//   const people = `https://swapi.dev/api/people/`
//   const homeWorld = 'https://swapi.dev/api/planets/'
//   const peopleRequest = axios.get(people)
//   const homeWorldRequest = axios.get(homeWorld)
//   axios.all([peopleRequest, homeWorldRequest])
//   .then(
//     axios.spread((...responses) => {
//       const peopleResponse = responses[0];
//       const homeWorldResponse = responses[1];
//       console.log(peopleResponse, homeWorldResponse)
//       this.setState({
//         characters: peopleResponse.data.results,
//         homeWorld: homeWorldResponse.data.results
//       })
//     })
//   )
//   .catch(err => {
//     console.log(err)
//   })
// } 

render() {
  console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Input />
        <CharacterTable characterData={this.state.characters} />
      </div>
    );
  }
}

export default App;
