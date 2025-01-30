import PropTypes from "prop-types";
import Evolution from "./Evolution.jsx";

export default function EvolutionList({ evolutionList }) {
  return (
    <ul className="flex flex-col gap-3">
      {evolutionList.map((pokemon) => (
        <Evolution
          key={pokemon.key}
          _key={pokemon.key}
          name={pokemon.species}
          requirement={pokemon.evolutionLevel}
          image={pokemon.sprite}
        />
      ))}
    </ul>
  );
}

EvolutionList.propTypes = {
  evolutionList: PropTypes.array,
};
