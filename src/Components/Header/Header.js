import React from "react";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  InputGroup,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Position,
  PopoverInteractionKind
} from "@blueprintjs/core";

import logo from "./logo.png";

import "./Header.css";
import { ALIGNMENT_BOTTOM } from "@blueprintjs/icons/lib/esm/generated/iconContents";

const exampleMenu = (
  <Menu>
    <MenuItem icon="graph" text="Graph" />
    <MenuItem icon="map" text="Map" />
    <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
    <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
    <MenuDivider />
    <MenuItem icon="cog" text="Settings...">
      <MenuItem icon="add" text="Add new application" disabled={true} />
      <MenuItem icon="remove" text="Remove application" />
    </MenuItem>
  </Menu>
);

const Header = () => {
  return (
    <>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <div
            style={{
              width: 340, // Sidebar's width - NavbarDivider's margin
              display: "flex",
              alignItems: "center",
              marginLeft: "-15px", // account for header padding
              paddingLeft: "1rem"
            }}
          >
            <img src={logo} style={{ height: "30px", marginRight: "5px" }} />
            <NavbarHeading>Blueprint Prototype</NavbarHeading>
          </div>
        </NavbarGroup>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarDivider />
          <InputGroup placeholder="Search data..." />
          <AnchorButton text="Docs" target="_blank" minimal rightIcon="share" />
          <AnchorButton
            text="Github"
            target="_blank"
            minimal
            rightIcon="code"
          />
          <Popover
            content={exampleMenu}
            position={Position.BOTTOM}
            interactionKind={PopoverInteractionKind.HOVER}
          >
            <Button minimal icon="airplane">
              Menu
            </Button>
          </Popover>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button minimal icon="document">
            Files
          </Button>
          <NavbarDivider />
          <Button icon="user" minimal />
          <Button icon="notifications" minimal />
          <Button icon="cog" minimal />
        </NavbarGroup>
      </Navbar>
    </>
  );
};

export default Header;
