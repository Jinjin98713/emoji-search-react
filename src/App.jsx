import { useState } from "react";
import "./App.css";
import data from "./data/emojiList.json";

import Search from "./components/Search";
import Line from "./components/Line";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  // State de la page actuelle
  const [page, setPage] = useState(1);
  // State de la recherche
  const [search, setSearch] = useState("");

  // Nombre d'emojis affichés par page
  const limite = 12;

  // Filtre de recherche
  const filteredEmojis = data.filter((element) => {
    const titleMatch = element.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const keywordsMatch = element.keywords
      .toLowerCase()
      .includes(search.toLowerCase());

    return titleMatch || keywordsMatch;
  });
  //console.log(filteredEmojis);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredEmojis.length / limite);

  // Calcul des index pour la pagination
  const start = (page - 1) * limite;
  const end = start + limite;

  return (
    <>
      <Search search={search} setSearch={setSearch} setPage={setPage} />
      <div className="results-header">
        <h2>Explore emojis</h2>
        <p>{filteredEmojis.length} results</p>
      </div>
      <main>
        {filteredEmojis.length === 0 && <p>Aucun emoji trouvé 🌊</p>}

        {filteredEmojis.slice(start, end).map((element, index) => {
          return (
            <Line key={index} title={element.title} symbol={element.symbol} />
          );
        })}
      </main>

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      )}
      <Footer />
    </>
  );
}

export default App;
