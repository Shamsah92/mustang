import React from "react";
import { DetailWrapper } from "../styles";

const MustangDetail = (props) => {
  const mustang = props.mustang;
  return (
    <DetailWrapper>
      <img src={mustang.image} alt={mustang.name} />
      <p>{mustang.name}</p>
      <p>{mustang.released}</p>
      <p>{mustang.topspeed}</p>
      <p onClick={() => props.umMustang()}>Back To List</p>

    </DetailWrapper>
  );
};

export default MustangDetail;
