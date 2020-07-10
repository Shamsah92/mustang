import React from "react";

import data from "../data";

import MustangItem from "./MustangItem";

import { ListWrap } from "../styles";

const MustangList = (props) => {
  const mustangLists = data.map((mustang) => (
    <MustangItem
      mustang={mustang}
      handleVisible={props.handleVisible}
      key={mustang.id}
    />
  ));

  return <ListWrap>{mustangLists}</ListWrap>;
};

export default MustangList;
