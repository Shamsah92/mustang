import styled, { createGlobalStyle } from "styled-components";

const Head = styled.h1`
  text-align: center;
  style={{
    display: flex,
    marginLeft: auto,
    marginRright: auto,
    width: 30%,
  }}
  color: ${(props) => props.theme.mainColor};
`;

const ListWrap = styled.div`
  with: 50px;
  height: 50px;
  margin: 40px;
`;

const MustangWrap = styled.div`
  margin: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
  }
  p {
    text-align: center;
    color: ${(props) => props.theme.description};
  }
`;

const SearchBarstyled = styled.input`

padding: 0.5rem;
margin: 1rem auto ;
display: block;
width:50%;
color: red;

`;
const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  img {
    width: 150%;
    flot: left;
  }
  p {
    vertical-align: middle;

    color: white;
  }
`;

const Description = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.description};
  font-size: 35px;
`;
const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
}
`;
export { Head, ListWrap, MustangWrap, GlobalStyle, Description, DetailWrapper, SearchBarstyled };
