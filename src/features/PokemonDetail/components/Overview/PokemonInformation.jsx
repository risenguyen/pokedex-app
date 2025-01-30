import PropTypes from "prop-types";
import { formatPokemonName } from "../../../../services/pokemonService.js";
import PokemonType from "./PokemonType.jsx";

export default function PokemonInformation({
  number,
  name,
  description,
  types,
}) {
  return (
    <div className="flex w-full flex-col justify-end">
      <span className="font-SFPro text-base text-stone-300">
        #{number.toString().padStart(3, "0")}
      </span>
      <h1 className="font-SFPro text-4xl font-medium text-stone-50">
        {formatPokemonName(name)}
      </h1>
      <p className="font-SFPro text-base text-stone-300">{description}</p>

      <PokemonType types={types} />
    </div>
  );
}

PokemonInformation.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  types: PropTypes.array,
};
