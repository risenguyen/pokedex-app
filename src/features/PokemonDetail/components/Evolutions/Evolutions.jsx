import PropTypes from "prop-types";
import { getEvolutionData } from "../../../../services/pokemonService.js";
import EvolutionList from "./EvolutionList.jsx";
import NoEvolution from "./NoEvolution.jsx";

export default function Evolutions({ selectedPokemon }) {
  const evolutionList = getEvolutionData(selectedPokemon);

  return (
    <div className="flex flex-col gap-3 py-6 font-SFPro lg:py-5">
      <h1 className="text-[28px] font-medium text-stone-50">Evolutions</h1>

      {evolutionList ? (
        <EvolutionList evolutionList={evolutionList} />
      ) : (
        <NoEvolution />
      )}
    </div>
  );
}

Evolutions.propTypes = {
  selectedPokemon: PropTypes.object,
};
