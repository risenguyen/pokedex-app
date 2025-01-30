import PropTypes from "prop-types";
import PokemonInformation from "./PokemonInformation.jsx";
import PokemonImageView from "./PokemonImageView.jsx";

export default function Overview({ selectedPokemon }) {
  return (
    <div className="flex min-h-full flex-col items-center justify-between py-6 lg:w-[48%] lg:py-5 lg:pl-5">
      <PokemonInformation
        number={selectedPokemon.num}
        name={selectedPokemon.species}
        description={selectedPokemon.flavorTexts[0].flavor}
        types={selectedPokemon.types}
      />
      <PokemonImageView
        key={selectedPokemon.key}
        normalImage={selectedPokemon.sprite}
        shinyImage={selectedPokemon.shinySprite}
      />
    </div>
  );
}

Overview.propTypes = {
  selectedPokemon: PropTypes.object,
};
