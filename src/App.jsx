import React, {useEffect, useState } from "react";
import Search from "./components/Search";

// TMDB_API_KEY_TOKEN= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGJlMzhmM2M0YmI5NjFjMDFjZjkzODQzNTU1NmI2NCIsIm5iZiI6MTc2NDgzNzk5My42MjUsInN1YiI6IjY5MzE0YTY5MjRhMmZmY2NiNGYyNDZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kll5klwP68rePgx46f7oyoeZOip1w0VWUWSzMu0jdqA'

// API_KEY = 'c0be38f3c4bb961c01cf938435556b64'

const API_BASE_URL= "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy without the Hasstle
            </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  )
}

export default App