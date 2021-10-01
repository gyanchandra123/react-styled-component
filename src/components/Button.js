import styled from 'styled-components'

export const DefaultButton = styled.button`
  background-color: blue;
  border: none;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

export const HispterButton = styled(DefaultButton)`
  background-color: white;
  width: 150px;
  color: blue;
  border: 1px solid blue;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`
