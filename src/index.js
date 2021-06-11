import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './styles/main.scss';

import { DataProvider } from "./context/DataContext";
import { CharactersProvider } from "./context/CharactersContext";
import { SeasonsProvider } from "./context/SeasonsContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <CharactersProvider>
        <SeasonsProvider>
          <App />
        </SeasonsProvider>
      </CharactersProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
