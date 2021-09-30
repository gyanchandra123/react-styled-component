import React from 'react'
import styled from 'styled-components'

const Random = () => {
  return (
    <Wrapper>
      <div className='underline'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  div {
    height: 0.5rem;
    width: 0.5rem;
    background: blue;
  }
`

export default Random
