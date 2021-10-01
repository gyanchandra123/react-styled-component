import React from 'react'
import styled from 'styled-components'

const ComplexTitle = (props) => {
  console.log('props value : ', props)
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div className='underline'></div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
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

export default Wrapper
