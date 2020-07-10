import React from "react";

import MustangList from "./components/MustangList";

import { Head, GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Head>Mustang</Head>

        <MustangList />
      </div>
    </div>
  );
}

export default App;
