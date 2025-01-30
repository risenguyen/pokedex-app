import PropTypes from "prop-types";
import { usePokemonDetail } from "../../../context/pokemonDetailContext.jsx";
import { formatPokemonName } from "../../../services/pokemonService.js";

export default function Pokemon({ _key, name, image }) {
  const { openDetail } = usePokemonDetail();

  function handleClick() {
    openDetail(_key);
  }

  return (
    <li className="relative flex aspect-square justify-center rounded-md border border-[#484748] px-4 py-4 transition-colors hover:border-stone-100">
      <button
        onClick={handleClick}
        aria-label="click to view pokemon"
        type="button"
        className="absolute inset-0"
      ></button>
      <div className="flex w-full flex-col items-center justify-between">
        <h1 className="w-full truncate text-center text-base text-stone-200">
          {formatPokemonName(name)}
        </h1>
        <img className="max-h-[64%] max-w-[76%] object-cover" src={image} />
      </div>
    </li>
  );
}

Pokemon.propTypes = {
  _key: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};
