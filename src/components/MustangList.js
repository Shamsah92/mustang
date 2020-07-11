import React, { useState } from "react";
import { Link } from "react-router-dom";

import data from "../data";

import MustangItem from "./MustangItem";

import { ListWrap, Description } from "../styles";
import SearchBar from "./SearchBar";

const MustangList = (props) => {
  const [query, setQuery] = useState("");
  const mustangLists = data.filter((mustang) => mustang.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    .map((mustang) => (
      <MustangItem
        mustang={mustang}
        handleVisible={props.handleVisible}
        key={mustang.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Description>      <Link to="/" style={{ color: "red" }}>
        Back to Home
      </Link></Description>      <ListWrap> {mustangLists} </ListWrap>
    </>

  )
};

export default MustangList;
