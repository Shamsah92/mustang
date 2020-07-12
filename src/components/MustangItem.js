import React from "react";

import { MustangWrap } from "../styles";

import { Link } from "react-router-dom";

const MustangItem = (props) => {
  const mustang = props.mustang;
  return (
    <MustangWrap>
      <Link to={`/mustang/${mustang.id}`}>
        <img
          onClick={() => props.handleVisible(mustang.id)}
          src={props.mustang.image}
          alt={props.mustang.name}
        />
      </Link>

      <p>{props.mustang.name}</p>
      <p>{props.mustang.date}</p>
    </MustangWrap>
  );
};

export default MustangItem;
