import React, { useState } from "react";
import { Switch, Tooltip, Position } from "@blueprintjs/core";
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
        <Tooltip content="Tooltip example" position={Position.RIGHT}>
        <Switch
          checked={darkTheme}
          label="Dark Theme"
          onChange={handleThemeChange}
          large
        />
        </Tooltip>
      </div>
    </div>
  );
}
