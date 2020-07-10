import styled, { createGlobalStyle } from "styled-components";

const Head = styled.h1`
  text-align: center;
  color: blue;
`;

const ListWrap = styled.div`
  with: 50px;
  height: 50px;
`;

const MustangWrap = styled.div`
  margin: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  p {
    text-align: center;
    color: red;
  }
`;

const GlobalStyle = createGlobalStyle`
body{
background-color: black;
}
`;
export { Head, ListWrap, MustangWrap, GlobalStyle };
