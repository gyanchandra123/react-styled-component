import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className='underline'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  div {
    height: 0.5rem;
    width: 0.5rem;
    background: red;
  }
`

export default ComplexTitle
