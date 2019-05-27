import React, { useState } from "react";
import { Switch } from "@blueprintjs/core";
import useStoreon from "storeon/react";

import "./ContentFrame.css";

export default function ContentFrame(props) {
  const { dispatch, darkTheme } = useStoreon("darkTheme");

  const handleThemeChange = () => {
    dispatch("theme/toggle");
  };

  return (
    <div id="content-frame">
      <div className="content-wrapper">
        <h1>Hello world! I'm a content Frame</h1>
        <Switch
          checked={darkTheme}
          label="Dark Theme"
          onChange={handleThemeChange}
          large
        />
      </div>
    </div>
  );
}
