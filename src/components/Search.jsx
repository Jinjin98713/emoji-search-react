import { LuX } from "react-icons/lu";
import logo from "../assets/emoji-wave-logo.png";
const Search = ({ search, setSearch, setPage }) => {
  return (
    <header>
      <h1>
        EmojiSearch
        <img src={logo} alt="Logo vague" />
      </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search emoji..."
          value={search}
          onChange={(event) => {
            const value = event.target.value;
            setSearch(value);
            setPage(1);
          }}
        />
        {search !== "" && (
          <button
            type="button"
            aria-label="Effacer la recherche"
            onClick={() => {
              setSearch("");
              setPage(1);
            }}
          >
            <LuX />
          </button>
        )}
      </div>
    </header>
  );
};

export default Search;
