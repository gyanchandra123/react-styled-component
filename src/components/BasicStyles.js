import styled from 'styled-components'

const BasicStyle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  //color: ${({ special }) => special && 'green'};
  color: ${({ special }) => (special ? 'green' : 'blue')};
`

export default BasicStyle
