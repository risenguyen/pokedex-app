import PropTypes from "prop-types";
import { usePokemonDetail } from "../../../../context/pokemonDetailContext.jsx";
import { formatPokemonName } from "../../../../services/pokemonService.js";

export default function Evolution({ _key, name, requirement, image }) {
  const { openDetail } = usePokemonDetail();

  function handleClick() {
    openDetail(_key);
  }

  return (
    <li className="relative flex h-24 items-center justify-between gap-2 rounded-md border border-[#484748] p-4 transition-colors hover:border-stone-100">
      <button
        onClick={handleClick}
        type="button"
        className="absolute inset-0"
      ></button>
      <div>
        <h1 className="text-xl text-stone-50">{formatPokemonName(name)}</h1>
        <p className="text-stone-300">
          {requirement
            ? `${isFinite(+requirement) ? "Level" : ""} ${requirement}`
            : "Base"}
          {}
        </p>
      </div>
      <img className="max-h-full" src={image} alt="" />
    </li>
  );
}

Evolution.propTypes = {
  _key: PropTypes.string,
  name: PropTypes.string,
  requirement: PropTypes.string,
  image: PropTypes.string,
};
