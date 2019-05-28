import React from "react";
import { Tooltip, Position } from "@blueprintjs/core";

import "./ContentFrame.css";

export default function ContentFrame(props) {

  return (
    <div id="content-frame">
      <div className="content-wrapper">
        <Tooltip content="Tooltip example" position={Position.RIGHT}>
          <h1>Hello world! I'm a content Frame</h1>
        </Tooltip>
      </div>
    </div>
  );
}
