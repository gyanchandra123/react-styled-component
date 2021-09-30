import styled from 'styled-components'

const BasicStyle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.special && 'green'};
`

export default BasicStyle
