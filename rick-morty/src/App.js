import { useState } from 'react';
import './App.css';
import imgRickMorty from './imagenn/rick-morty.png'
import Characters from './components/characters';

function App() {

  const [characters, setCharacters] = useState(null); //Array para guardar los personajes

  const regAPI = async () => { //Al tocar click, cargo el array con los datos desde la Api
    console.log("Se clickeo en buscar personajes");
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterAPI = await api.json();
   // console.log(characterAPI);

    setCharacters(characterAPI.results)


  };
  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}></Characters>
        ) : (
          <>
          <img src={imgRickMorty} alt="Rick & Morty" className="img-home"></img>
          <button onClick={regAPI} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
      </header>
    </div>
  );
}

export default App;
