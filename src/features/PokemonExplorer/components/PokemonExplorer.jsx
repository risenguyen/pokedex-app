import { useEffect, useState } from "react";

import usePagination from "../../../hooks/usePagination.js";
import { getPokemonResults } from "../../../services/pokemonService.js";

import SearchBar from "../../../components/SearchBar.jsx";
import PokemonList from "./PokemonList.jsx";
import Pagination from "../../../components/Pagination.jsx";

export default function PokemonExplorer() {
  const [pokemonList, setPokemonList] = useState([]);
  const [query, setQuery] = useState("");
  const { currentPage, setCurrentPage, totalPages, setTotalPages, goToPage } =
    usePagination();

  useEffect(() => {
    const [results, totalPages] = getPokemonResults(query, currentPage);

    setPokemonList(results);
    setTotalPages(totalPages);
  }, [query, currentPage, setTotalPages]);

  function handleChange(e) {
    setCurrentPage(1);
    setQuery(e.target.value);
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <SearchBar value={query} onChange={handleChange} />

      <div className="flex flex-1 flex-col justify-between gap-6">
        <PokemonList pokemonList={pokemonList} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </div>
    </div>
  );
}
