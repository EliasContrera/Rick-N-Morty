export default function Characters(props){
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
        setCharacters(null); //Le indico que si se clickea, el array de los PJ's se ponga en nulo, entonces se vuelve al home
        console.log("Reseteando..");
    }

    return(
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Inicio</span>
            <div className="container-characters">
                {characters.map((character, index) => (//return implicito de los datos
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h5>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive"></span>
                                        <p>Vivo</p>
                                    </>
                                ):(//Si el status no es Alive, le añado la clase muerto
                                    <>
                                        <span className="dead"></span><p>Fallecido</p>
                                        
                                    </>
                                )}
                            </h5>
                            <p className="text-grey"><span>Episodios: </span>
                                    <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                            <p><span className="text-grey">Tipo: </span><span>{character.type === '' ? (
                                <>
                                    <span>Normal</span>
                                </>
                            ): (
                                <>
                                    <span>{character.type}</span>
                                </>
                            )}</span></p>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver al Inicio</span>
        </div>
    )
}