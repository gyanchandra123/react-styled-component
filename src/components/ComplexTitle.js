import React from 'react'
import styled from 'styled-components'
import { colors, customBorder } from './util'

const ComplexTitle = (props) => {
  console.log('props value : ', props)

  return (
    <div className={props.className}>
      <h2>{props.title}</h2>

      <div className='box'>custom border applies here....</div>
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
    background: ${colors};
  }

  .box {
    height: 10px;
    border: ${customBorder({ width: 3, style: 'solid', color: 'green' })};
    width: auto;
    padding: 10px;
  }
`

export default Wrapper
