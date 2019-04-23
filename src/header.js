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
      <Navbar className={Classes.DARK} style={{ background: "#293742" }}>
        <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
          <NavbarGroup align={Alignment.LEFT}>
            <img
              src="https://ven01993.service-now.com/bzp2Documents.png"
              style={{ height: "30px", marginRight: "5px" }}
            />
            <NavbarHeading>TASKER Portal </NavbarHeading>
            <NavbarDivider />
            <InputGroup placeholder="Search data..." />
            <AnchorButton
              text="Docs"
              target="_blank"
              minimal
              rightIcon="share"
            />
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
        </div>
      </Navbar>
    </>
  )
}

export default Header;
