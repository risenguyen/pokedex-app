import { useState } from "react";
import PropTypes from "prop-types";

const buttonClasses = {
  selected: "border-b border-stone-100 px-[2px] font-SFPro text-stone-100",
  unSelected: "px-[2px] font-SFPro text-stone-300",
};

export default function PokemonImageView({ normalImage, shinyImage }) {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <>
      <img
        className="h-[40%] w-[60%] object-contain"
        src={isShiny ? shinyImage : normalImage}
        alt="Bulbasaur"
      />

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setIsShiny(false)}
          className={
            isShiny ? buttonClasses.unSelected : buttonClasses.selected
          }
        >
          Normal
        </button>
        <button
          onClick={() => setIsShiny(true)}
          className={
            !isShiny ? buttonClasses.unSelected : buttonClasses.selected
          }
        >
          Shiny
        </button>
      </div>
    </>
  );
}

PokemonImageView.propTypes = {
  normalImage: PropTypes.string,
  shinyImage: PropTypes.string,
};
