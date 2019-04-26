import React from 'react';
import styled from 'styled-components'
import {
  AnchorButton,
  Button,
  ButtonGroup
} from "@blueprintjs/core";

const Box = styled.div`
    box-sizing: border-box;
    margin: 0;
    transition: all .3s;
    min-height:50vh;
`
const BoxHeader = styled.div`
  background-color:rgba(239, 242, 245,0.5);;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 16px;
  width:100%;
`
const BoxContent = styled.div`
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom: 1px solid #d1d5da;
  border-left: 1px solid #d1d5da;
  border-right: 1px solid #d1d5da;
  margin-bottom: -1px;
  padding:16px;
  width:100%;
`

const Content = () => {
  return (
    <Box>
      <BoxHeader>
        <ButtonGroup>
          <Button icon="database">Queries</Button>
          <Button icon="function">Functions</Button>
          <AnchorButton icon="cog" rightIcon="settings">Options</AnchorButton>
        </ButtonGroup>
      </BoxHeader>
      <BoxContent>
      <p>la la la</p>
      </BoxContent>
    </Box>
  )
}

export default Content;