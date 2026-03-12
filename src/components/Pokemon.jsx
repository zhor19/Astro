import { useState, useEffect } from 'react';

export default function PokemonCard() {
    const [number, setNumber] = useState(() => Math.floor(Math.random() * 150) + 1);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
            const data = await response.json();
            setPokemon(data);
        };

        fetchData();
    }, [number]);

    const generarNuevo = () => {
        const nuevoId = Math.floor(Math.random() * 150) + 1;
        setNumber(nuevoId);
    };

    if (!pokemon) {
        return <div className="p-4 text-center">Cargando Pokémon...</div>;
    }

    return (
        <div className="p-4 text-center border rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
            <img 
                src={pokemon.sprites.front_default} 
                alt={pokemon.name} 
                className="mx-auto w-32 h-32"
            />
            <p className="text-gray-500 mb-4">ID: {number}</p>
            
            <button 
                onClick={generarNuevo}
                className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg font-medium"
            >
                ¡Buscar otro!
            </button>
        </div>
    );
}