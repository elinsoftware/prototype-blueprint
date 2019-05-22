import React from 'react';
import Header from './header'
import styled from 'styled-components'

const Grid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-row: 40px;
    grid-gap:16px;
    justify-content: space-evenly;
`
const Item = styled.div`
    background-color: #E1EFE6;
    min-height:35px;
`

const SectionOne = () => {
  return (
    <>
    <Grid>
        <Item>1</Item>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </Grid>
    </>
  )
}

export default SectionOne;