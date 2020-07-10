import React from "react";

import { MustangWrap } from "../styles";

const MustangItem = (props) => {
  const mustang = props.mustang;
  return (
    <MustangWrap>
      <img
        onClick={() => props.handleVisible(mustang.id)}
        src={props.mustang.image}
        alt={props.mustang.name}
      />

      <p>{props.mustang.name}</p>
      <p>{props.mustang.date}</p>
    </MustangWrap>
  );
};

export default MustangItem;
