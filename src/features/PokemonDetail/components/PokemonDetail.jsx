import { useEffect, useRef } from "react";
import { getPokemonWithKey } from "../../../services/pokemonService.js";
import { usePokemonDetail } from "../../../context/pokemonDetailContext.jsx";

import Overview from "./Overview/Overview.jsx";
import Stats from "./Stats/Stats.jsx";
import Evolutions from "./Evolutions/Evolutions.jsx";

export default function PokemonDetail() {
  const { selectedPokemon, closeDetail } = usePokemonDetail();

  const pokemon = getPokemonWithKey(selectedPokemon);
  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollTo({ top: 0, behaviour: "smooth" });
    }

    if (selectedPokemon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPokemon]);

  const handleClickOutside = (event) => {
    if (detailRef.current && !detailRef.current.contains(event.target)) {
      closeDetail();
    }
  };

  if (!selectedPokemon) return null;

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 backdrop-blur-sm"
    >
      <div
        ref={detailRef}
        className="custom-scrollbar absolute bottom-0 flex h-[80vh] w-full flex-col overflow-y-scroll rounded-t-md bg-stone-900 px-6 lg:flex-row lg:justify-between lg:gap-16 lg:overflow-y-auto lg:px-1 lg:py-2"
      >
        <Overview selectedPokemon={pokemon} />
        <div className="lg:custom-scrollbar lg:min-h-full lg:w-1/2 lg:overflow-y-auto lg:pr-6">
          <Stats selectedPokemon={pokemon} />
          <Evolutions selectedPokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}
