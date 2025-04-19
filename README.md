# Pokédex

A fully responsive React application that allows you to browse, search, and view detailed information about Pokémon.

![Desktop Demo](./demo/mobile.gif) ![Mobile Demo](./demo/desktop.gif)

## Features

- **Complete Pokémon Catalog**: Browse through all Pokémon in a paginated list.
- **Search Functionality**: Quickly find any Pokémon by name.
- **Detailed View**: Click on any Pokémon to access comprehensive information including:
  - Base statistics
  - Type information
  - Evolution chain
  - Physical characteristics
- **Responsive Design**: Seamlessly works on both desktop and mobile devices.

## Technologies Used

- React
- Vite
- Tailwind (for styling)
- [GraphQL Pokemon](https://graphql-pokemon.js.org/) (for Pokémon data)

## 🔧 Installation

1. Clone this repository
```bash
git clone https://github.com/risenguyen/pokedex-app
cd pokedex-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Browsing Pokémon
- Scroll through the paginated list to browse all Pokémon.
- Use the pagination controls to navigate between pages.

### Searching for Pokémon
- Use the search bar at the top of the application.
- Enter a Pokémon's name or partial name to filter the list.

### Viewing Pokémon Details
- Click on any Pokémon card to view its detailed information.
- The detailed view includes:
  - Name
  - Image
  - Types
  - Physical attributes (height, weight)
  - Base statistics (HP, Attack, Defense, etc.)
  - Evolution chain

## API Integration

This application uses the [GraphQL Pokemon](https://graphql-pokemon.js.org/) to fetch Pokémon data. The API calls are handled in the services directory, providing a clean separation of concerns.

## Responsive Design

The application is designed to be fully responsive:
- **Desktop**: Optimized grid layout showing multiple Pokémon cards per row.
- **Mobile**: Single-column layout with touch-friendly controls.
