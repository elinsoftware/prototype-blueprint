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
  Elevation
} from "@blueprintjs/core";

import Section from "./Section";
import "./LeftSidebar.css";

import mockdata from "./mock.json";
import { buildListNodes, buildTreeNodes } from "./utils";

const { listData, treeData, tasksData } = mockdata;

const Divider = ({ title }) => (
  <div className="custom-menu-divider">
    {title && (
      <h5>
        <span>{title}</span>
      </h5>
    )}
  </div>
);

const CheckboxItem = ({ title, number, progress, selected }) => (
  <div className="checkbox-wrapper">
    <Checkbox checked={selected} style={{ flexGrow: 2, maxWidth: "65%" }}>
      {title}
    </Checkbox>
    <div style={{ width: "80px", display: "flex", alignItems: "center" }}>
      <span>{number}</span>
      <ProgressBar
        animate={false}
        stripes={false}
        intent="primary"
        value={progress}
      />
    </div>
  </div>
);

const ApprovalItem = ({ title }) => (
  <div className="checkbox-wrapper">
    <span>{title}</span>
    <div style={{ width: "80px", display: "flex", alignItems: "center" }}>
        <Button minimal={true} intent="success">
          <small>Approve</small>
        </Button>
    </div>
  </div>
);

const FirstPanel = () => {
  const [treeNodes, setTreeNodes] = useState([]);

  useEffect(() => {
    const builtTreeNodes = treeData.map(node => {
      if (node.folder) {
        node.icon = node.isExpanded ? "folder-open" : "folder-close";
      } else {
        node.icon = "document";
      }

      if (node.childNodes) {
        node.childNodes = buildTreeNodes(node.childNodes);
      }
      return node;
    });

    setTreeNodes(builtTreeNodes);
  });

  const handleNodeExpand = treeNode => {
    treeNode.isExpanded = true;
  };

  const handleNodeCollapse = treeNode => {
    treeNode.isExpanded = false;
  };

  const handleNodeClick = treeNode => {
    console.log("Tree node clicked", treeNode);
  };

  return (
    <>
      <Section title="Search">
        <InputGroup leftIcon="search" round={true} placeholder="Search input" />
      </Section>

      <Section title="Status" action="Add">
        <div className="tree-wrapper flat">
          <Tree contents={listData} />
        </div>
      </Section>

      <Divider title="cases" />

      <Section title="Open Cases" action="View All">
        <div className="tree-wrapper">
          <Tree
            contents={treeNodes}
            onNodeExpand={handleNodeExpand}
            onNodeCollapse={handleNodeCollapse}
            onNodeClick={handleNodeClick}
          />
        </div>
      </Section>

      <Divider title="tasks" />

      <Section title="Assigned Tasks" action="View All">
        <div className="tree-wrapper flat">
          <Tree
            contents={tasksData}
            onNodeExpand={handleNodeExpand}
            onNodeCollapse={handleNodeCollapse}
            onNodeClick={handleNodeClick}
          />
        </div>
      </Section>

      <Divider title="approvals"/>
      <Section title="pending requests" action="View All">
      <ApprovalItem
        title="CSE0009832: Lorem ipsum bono"
        />
        <ApprovalItem
        title="TASK000981: Create memo binder"
        />
      </Section>
      <Divider/>
      <Section title="Section title">
       
        <p>Selected</p>
        <CheckboxItem
          selected={true}
          title="List item"
          number={27}
          progress={0.75}
        />
        <CheckboxItem
          selected={true}
          title="Very long list item title that didn't fit here"
          number={10}
          progress={0.2}
        />

        <p>Unselected</p>
        <CheckboxItem
          selected={false}
          title="List item"
          number={25}
          progress={0.85}
        />
        <CheckboxItem
          selected={false}
          title="Very long list item title that goes over multiple lines"
          number={25}
          progress={0.85}
        />
      </Section>
      <Divider />
      <br />
    </>
  );
};

const SecondPanel = () => {
  return <Section title="Section title">stuff</Section>;
};

export default function LeftSidebar(props) {
  const [tab, setTab] = useState("first");

  const handleTabChange = tab => {
    setTab(tab);
  };

  return (
    <div className="left-sidebar bp3-elevation-2">
      <div className="sidebar-header ">
        <h2>workspace</h2>
        <Icon icon="menu-closed" className="icon-btn" />
      </div>
      <Tabs onChange={handleTabChange} selectedTabId={tab}>
        <Tab id="first" title="Active Items" panel={<FirstPanel />} />
        <Tab id="second" title="History" panel={<SecondPanel />} />
      </Tabs>
      <div className="sidebar-footer">
        <Button fill={true} icon="add">
          Default button
        </Button>
      </div>
    </div>
  );
}
