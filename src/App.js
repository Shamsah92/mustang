import React, { useState } from "react";

import MustangList from "./components/MustangList";
import { Head, GlobalStyle, Description } from "./styles";
import { ThemeProvider } from "styled-components";
import MustangDetail from "./components/MustangDetail";
import mustanglines from "./data";

const theme = {
  mainColor: "white",
  backgroundColor: "black",
  description: "red",
};

function App() {
  const [mustang, umMustang] = useState(null);
  const handleVisible = (mustangId) => {
    const handleVisible = mustanglines.find(
      (mustang) => mustang.id === mustangId
    );
    umMustang(handleVisible);
  };
  const handlemustang = () =>
    alert(
      "Welcome, dear visitor, we hope that you get useful information in our site "
    );

  const setView = () =>
    mustang ? (
      <MustangDetail mustang={mustang} />
    ) : (
      <MustangList handleVisible={handleVisible} />
    );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Head>
          <img
            src="https://www7.0zz0.com/2020/07/10/15/270298198.jpg"
            alt="Logo"
          />
          <p></p>
          <button onClick={handlemustang}>Welcome Massage </button>
        </Head>
        <Description>Mustang List</Description>
      </div>
      {setView()}
    </ThemeProvider>
  );
}

export default App;
