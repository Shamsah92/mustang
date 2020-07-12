import React from "react";
import { SearchBarstyled } from "../styles";

const SearchBar = (setQuery) => {
  return <SearchBarstyled onChange={(event) => setQuery(event.target.value)} />;
};

export default SearchBar;
