import React, { useState, useEffect } from "react";
import {
  Icon,
  Tab,
  Tabs,
  InputGroup,
  Tree,
  Checkbox,
  ProgressBar,
  Button,
  Elevation,
  Tooltip,
  Tag
} from "@blueprintjs/core";
const treeDataStructure = [
    {
      "label": "CSE000762: Annual Reporting",
      "folder": true,
      "id": 51223362,
      "childNodes":[
        {
            "label": "item",
            "folder": false,
            "id": 85192372
          }
      ]
    },
    {
      "label": "CSE000739: APM Form collection process and org structure",
      "folder": true,
      "isExpanded": true,
      "id": 8123352,
      "childNodes": [
        {
          "label": "Tasks",
          "folder": true,
          "isExpanded": false,
          "id": 91929232,
          "secondaryLabel": (
            <Button minimal intent="primary"><small>new</small></Button>
        ),
          "childNodes": [
            {
                "label": "Collect signatures from stakeholders",
                "folder": false,
                "id": 8494158
              },
            {
              "label": "Collect org data from all departments",
              "folder": false,
              "id": 719252,
              "secondaryLabel": (
                <Icon icon="error" intent="danger"/>
            )
            },
            {
              "label": "Compile PDF doc",
              "folder": false,
              "id": 195299,
              "secondaryLabel": (
                <Icon icon="small-tick" intent="success"/>
            )
            },
            {
              "label": "Submit org structure for signatures",
              "folder": false,
              "id": 1953299
            }
          ]
        },
        {
          "label": "Approvals",
          "folder": true,
          "isExpanded": false,
          "id": 919422292,
          "childNodes": [
            {
              "label": "Alex Bono",
              "folder": false,
              "id": 719234252,
              "secondaryLabel": (
                <Icon icon="confirm" intent="success"/>
            )
            },
            {
              "label": "Niki Heily",
              "folder": false,
              "id": 19235299
            },
            {
              "label": "Antonio Moreno",
              "folder": false,
              "id": 19536299
            }
          ]
        }
      ]
    },
    {
      "label": "CSE000991: M&A analysis",
      "folder": true,
      "id": 519252,
      "childNodes": [
    {
      "label": "List item",
      "folder": false,
      "id": 851972
    }]
    }
  ]
export default treeDataStructure