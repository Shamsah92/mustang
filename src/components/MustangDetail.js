import React from "react";
import { DetailWrapper } from "../styles";
import { Link } from "react-router-dom";

const MustangDetail = (props) => {
  const mustang = props.mustang;

  return (
    <DetailWrapper>
      <Link to="/mustangs">
        <img src={mustang.image} alt={mustang.name} />
        <p>{mustang.name}</p>
        <p>{mustang.released}</p>
        <p>{mustang.topspeed}</p>
        <p onClick={() => props.umMustang()}>Back To List</p>
      </Link>
    </DetailWrapper>
  );
};

export default MustangDetail;
