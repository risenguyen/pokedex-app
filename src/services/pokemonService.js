// Private Fields
const API_URL = "https://graphqlpokemon.favware.tech/v8";
let cache = [];

// Public Functions
export function formatPokemonName(name) {
  return name
    .split("-")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

export function getPokemonWithKey(key) {
  return cache.find((pokemon) => pokemon.key === key);
}

export const getEvolutionData = createGetEvolutionData();

export const getPokemonResults = createGetPokemonResults();

export async function preloadData() {
  const query = `
  {
    getAllPokemon(offset: 93) {
      key
      species
      num
      serebiiPage
      evolutionLevel
      evolutions {
        key
        evolutionLevel
        sprite
        species
        evolutions {
          key
          evolutionLevel
          sprite
          species
        }
      }
      preevolutions {
        key
        evolutionLevel
        sprite
        species
        preevolutions {
          key
          evolutionLevel
          sprite
          species
        }
      }
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      types {
        name
      }
      flavorTexts {
        flavor
      }
      sprite
      shinySprite
    }
  }
  `;

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    // Attempt to fetch
    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
      }),
    });

    // Handle failed response
    if (!response.ok) {
      const { errors } = await response.json();
      console.log(`Error Data: `, errors);

      errors.forEach((error) => {
        if (error.message) {
          console.log(error.message);
          throw new Error(
            error.message ||
              "Something went wrong! Please try refreshing the page.",
          );
        }
      });
    }

    // Load data into cache
    const data = await response.json();
    cache = data.data.getAllPokemon;
    console.log(cache);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

// Private Functions
function createGetEvolutionData() {
  function getStage(pokemon) {
    if (!pokemon.evolutions && !pokemon.preevolutions) return "noevolve";

    if (!pokemon.preevolutions) return "base";

    if (pokemon.evolutions && pokemon.preevolutions) return "first";

    if (!pokemon.evolutions) return "final";
  }

  function getEvolutionLine(pokemon, stage) {
    switch (stage) {
      case "noevolve":
        return null;

      case "base": {
        const hasThreeStages = pokemon.evolutions.every((evolution) =>
          Boolean(evolution.evolutions),
        );

        if (hasThreeStages) {
          return [
            pokemon,
            ...pokemon.evolutions,
            ...pokemon.evolutions[0].evolutions,
          ];
        }

        return [pokemon, ...pokemon.evolutions];
      }

      case "first": {
        return [...pokemon.preevolutions, pokemon, ...pokemon.evolutions];
      }

      case "final": {
        const hasThreeStages = pokemon.preevolutions.every((evolution) =>
          Boolean(evolution.preevolutions),
        );

        if (hasThreeStages) {
          return [
            ...pokemon.preevolutions[0].preevolutions,
            ...pokemon.preevolutions,
            pokemon,
          ];
        }

        return [...pokemon.preevolutions, pokemon];
      }
    }
  }

  return function (pokemon) {
    const stage = getStage(pokemon);
    const evolutionLine = getEvolutionLine(pokemon, stage);

    return evolutionLine;
  };
}

function createGetPokemonResults() {
  let lastQuery;
  let lastResults;

  const filterCacheWithQuery = (query) =>
    cache.filter((pokemon) => pokemon.key.includes(query));

  function applyQuery(query) {
    const cleanedQuery = query.trim().toLowerCase();
    const queryChanged = query !== lastQuery;

    if (queryChanged) {
      const filteredResults = filterCacheWithQuery(cleanedQuery);

      lastQuery = cleanedQuery;
      lastResults = filteredResults;

      return filteredResults;
    }

    return lastResults;
  }

  function paginateList(list, pageNumber, itemsPerPage) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  }

  function applyPagination(results, pageNumber, itemsPerPage) {
    const paginatedResults = paginateList(results, pageNumber, itemsPerPage);
    const totalPages = Math.ceil(results.length / itemsPerPage);

    return [paginatedResults, totalPages];
  }

  return function (query, pageNumber, itemsPerPage = 36) {
    if (cache.length === 0) return [];

    const results = applyQuery(query);
    const [paginatedResults, totalPages] = applyPagination(
      results,
      pageNumber,
      itemsPerPage,
    );

    return [paginatedResults, totalPages];
  };
}
