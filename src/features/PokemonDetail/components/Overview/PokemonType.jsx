import PropTypes from "prop-types";

const typeColors = {
  Fire: "bg-orange-600",
  Water: "bg-blue-400",
  Grass: "bg-green-400",
  Poison: "bg-purple-400",
  Normal: "bg-[#b1b1c7]",
  Electric: "bg-yellow-400",
  Ice: "bg-[#a3d7ff]",
  Fighting: "bg-[#9c4516]",
  Steel: "bg-[#a1a1a1]",
  Ground: "bg-[#b8ac54]",
  Rock: "bg-[#4f3105]",
  Flying: "bg-[#6f8ce3]",
  Psychic: "bg-[#de50de]",
  Fairy: "bg-[#faaafa]",
  Bug: "bg-[#6e9121]",
  Dark: "bg-[#423f52]",
  Dragon: "bg-[#3d1fd1]",
  Ghost: "bg-[#574ba3]",
};

export default function PokemonType({ types }) {
  return (
    <div className="mt-[8px] flex gap-2">
      {types.map((type) => (
        <span
          key={type.name}
          className={`${typeColors[type.name]} rounded-md px-2 py-[3px] font-SFPro text-xs text-stone-50`}
        >
          {type.name.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

PokemonType.propTypes = {
  types: PropTypes.array,
};
