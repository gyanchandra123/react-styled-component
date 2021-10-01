import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'
import Card from './components/Card'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* <ComplexTitle title='more complex title'></ComplexTitle>
      <Random></Random> */}
      <GlobalStyle />
      <Card></Card>
    </div>
  )
}

export default App
