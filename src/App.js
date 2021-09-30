import styled from 'styled-components'

const BasicStyle = styled.h1`
  text-align: center;
  text-transform: uppercase;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicStyle className='title'>styled components</BasicStyle>
      <button className='btn'>click me</button>
    </div>
  )
}

export default App
