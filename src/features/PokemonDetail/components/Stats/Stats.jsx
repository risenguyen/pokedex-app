import PropTypes from "prop-types";

export default function Stats({ selectedPokemon }) {
  return (
    <div className="flex flex-col py-6 font-SFPro lg:py-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-[28px] font-medium text-stone-50">Base Stats</h1>

        {/* StatList */}
        <ul className="pb-2">
          <li className="flex justify-between">
            <span className="text-lg text-stone-300">HP</span>
            <h2 className="font text-lg font-medium leading-none text-stone-50">
              {selectedPokemon.baseStats.hp}
            </h2>
          </li>
          <li className="flex justify-between">
            <span className="text-lg text-stone-300">Speed</span>
            <h2 className="font text-lg font-medium leading-none text-stone-50">
              {selectedPokemon.baseStats.speed}
            </h2>
          </li>
          <li className="flex justify-between">
            <span className="text-lg text-stone-300">Attack</span>
            <h2 className="font text-lg font-medium leading-none text-stone-50">
              {selectedPokemon.baseStats.attack}
            </h2>
          </li>
          <li className="flex justify-between">
            <span className="text-lg text-stone-300">Defense</span>
            <h2 className="font text-lg font-medium leading-none text-stone-50">
              {selectedPokemon.baseStats.defense}
            </h2>
          </li>
          <li className="flex justify-between">
            <span className="text-lg text-stone-300">Sp. Attack</span>
            <h2 className="font text-lg font-medium leading-none text-stone-50">
              {selectedPokemon.baseStats.specialattack}
            </h2>
          </li>
          <li className="flex justify-between">
            <span className="text-lg text-stone-300">Sp. Defense</span>
            <h2 className="font text-lg font-medium leading-none text-stone-50">
              {selectedPokemon.baseStats.specialdefense}
            </h2>
          </li>
        </ul>

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-2xl text-stone-200">Total:</span>
          <h2 className="text-2xl font-medium text-stone-50">
            {selectedPokemon.baseStatsTotal}
          </h2>
        </div>
      </div>
    </div>
  );
}

Stats.propTypes = {
  selectedPokemon: PropTypes.object,
};
