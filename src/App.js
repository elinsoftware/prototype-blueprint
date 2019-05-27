import React from "react";
import Header from "./Components/Header/Header";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import ContentFrame from "./Components/ContentFrame/ContentFrame";
import { Classes } from "@blueprintjs/core";
import useStoreon from "storeon/react";
import "./App.css";

// DONE: LIST and TREE sections
// DONE: toggle theme button
// ? TODO: better sidebar scroll as in ServiceNow App Navigator

const App = () => {
  const { darkTheme } = useStoreon("darkTheme");

  return (
    <div id="app" className={darkTheme ? Classes.DARK : ""}>
      <Header />
      <LeftSidebar />
      <ContentFrame />
    </div>
  );
};

export default App;
