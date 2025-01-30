import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const PokemonDetailContext = createContext();

export function PokemonDetailProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function openDetail(pokemonKey) {
    setSelectedPokemon(pokemonKey);
  }

  function closeDetail() {
    setSelectedPokemon(null);
  }

  const value = {
    selectedPokemon,
    openDetail,
    closeDetail,
  };

  return (
    <PokemonDetailContext.Provider value={value}>
      {children}
    </PokemonDetailContext.Provider>
  );
}

PokemonDetailProvider.propTypes = {
  children: PropTypes.any,
};

export function usePokemonDetail() {
  const context = useContext(PokemonDetailContext);

  if (!context)
    throw new Error(
      "Please make sure this hook is used in a PokemonDetailProvider!",
    );

  return context;
}
