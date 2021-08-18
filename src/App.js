import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import PokemonForm from './components/PokemonForm';
// import PokemonInfo from './components/PokemonInfo';

class App extends Component {
  state = {
    pokemon: null,
  };

  async componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }));
  }
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {this.state.pokemon && (
          <div>ТУт будет покемон после фетча і когда в стейт запишем</div>
        )}
      </div>
    );
  }
}
export default App;
