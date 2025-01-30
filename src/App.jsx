import { useEffect, useState } from "react";
import { preloadData } from "./services/pokemonService.js";
import { PokemonDetailProvider } from "./context/pokemonDetailContext.jsx";

import Loading from "./components/UserExperience/Loading.jsx";
import Message from "./components/UserExperience/Message.jsx";
import Header from "./components/Header.jsx";
import PokemonExplorer from "./features/PokemonExplorer/components/PokemonExplorer.jsx";
import PokemonDetail from "./features/PokemonDetail/components/PokemonDetail.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initialize() {
      setIsLoading(true);
      setError(null);

      try {
        await preloadData();
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    initialize();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      {isLoading && <Loading />}
      {error && <Message message={error.message} />}
      <PokemonDetailProvider>
        {!isLoading && !error && (
          <>
            <Header />
            <PokemonExplorer />
          </>
        )}
        <PokemonDetail />
      </PokemonDetailProvider>
    </div>
  );
}

export default App;
