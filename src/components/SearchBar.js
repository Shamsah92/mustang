import React from "react";
import { SearchBarstyled } from "../styles";

const SearchBar = (props) => {


    return (
        <SearchBarstyled onChange={(event) => props.setQuery(event.target.value)} />


    )
}


export default SearchBar;