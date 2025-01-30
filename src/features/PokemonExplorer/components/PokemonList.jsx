import PropTypes from "prop-types";
import Pokemon from "./Pokemon.jsx";

export default function PokemonList({ pokemonList }) {
  return (
    <div>
      <ul className="grid h-full w-full grid-cols-2 gap-3 font-SFPro text-stone-100 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 2xl:grid-cols-6">
        {pokemonList?.map((pokemon) => (
          <Pokemon
            key={pokemon.key}
            _key={pokemon.key}
            name={pokemon.species}
            image={pokemon.sprite}
          />
        ))}
      </ul>
    </div>
  );
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
};
