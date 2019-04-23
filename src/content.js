import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 24px 32px 32px 24px;
    background: #fff;
    border-radius: 2px;
    transition: all .3s;
    border: 1px solid #e8e8e8;
    min-height:50vh;
`

const Content = () => {
  return (
    <Box>
      <p>la la la</p>
    </Box>
  )
}

export default Content;