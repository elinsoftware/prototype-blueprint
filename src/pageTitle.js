import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: minmax(24px,auto) minmax(auto,1200px) minmax(24px,auto);
    background: #fff;
    padding: 16px 32px 16px;
    border-bottom: 1px solid #e8e8e8;
    height:137px;
  `
const Title = styled.h2`
    margin-top:15px;
    margin-bottom:15px;
`

const PageTitle = () => {
  return (
    <Wrapper>
      <div></div>
      <div>
          <span className="bp3-text-muted"> Home / Cases / CASE0000007</span>
          <Title className="bp3-heading">Viverra nec felis. Vivamus aliquet, metus non sagi...</Title>
          <span className="bp3-text-large">Ut neque nunc, consectetur a elementum a, viverra nec felis. Vivamus aliquet, metus non sagittis dictum, justo leo rutru...</span>
      </div>
      <div></div>
    </Wrapper>
  )
}

export default PageTitle;