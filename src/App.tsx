import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import AppProvider from "./hooks";

import Routes from "./routes";

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </DndProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
