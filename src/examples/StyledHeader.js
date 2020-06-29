import React from 'react'
import styled from 'styled-components';

const StyledHeader = ({ title }) => {
  return (
    <StyledSectionForHeader>
      <h1>{title}</h1>
      <h2 className="random">One more heading</h2>
    </StyledSectionForHeader>
  )
}

const StyledSectionForHeader = styled.section`
  background: red;
  transition: all 2s ease-in-out;
  h1 {
    color: blue;
  }
  .random {
    color: green;
  }
  &:hover {
    background: black;
  }
`

export default StyledHeader
