import styled from 'styled-components'

const BasicStyle = styled.h1`
  text-align: center;
  text-transform: uppercase;
`

const DefaultButton = styled.button`
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

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicStyle className='title'>styled components</BasicStyle>
      <DefaultButton className='btn'>click me</DefaultButton>
    </div>
  )
}

export default App
