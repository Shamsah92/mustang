import React from "react";

import { MustangWrap } from "../styles";

const MustangItem = (props) => {
  return (
    <MustangWrap>
      <img src={props.mustang.image} alt={props.mustang.name} />

      <p>{props.mustang.name}</p>
      <p>{props.mustang.date}</p>
    </MustangWrap>
  );
};

export default MustangItem;
