import React from "react";
import Header from "./Components/Header/Header";
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import ContentFrame from "./Components/ContentFrame/ContentFrame";
import "./App.css";

const App = () => {

  return (
    <div id="app">
      <Header />
      <LeftSidebar />
      <ContentFrame />
    </div>
  );
};

export default App;
