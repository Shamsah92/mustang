import React, { useState } from "react";
import { Route, Switch } from "react-router";
import MustangList from "./components/MustangList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import MustangDetail from "./components/MustangDetail";
import mustanglines from "./data";
import Home from "./components/Home";
// import { Link } from "react-router-dom";

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

  const setView = () =>
    mustang ? (
      <MustangDetail mustang={mustang} umMustang={umMustang} />
    ) : (
      <MustangList handleVisible={handleVisible} />
    );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Switch>
        <Route path="/mustang">{setView}</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
