import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'
import Loading from './components/Loading'
import { HispterButton } from './components/Button'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <HispterButton>click me</HispterButton>
      <HispterButton
        as='a'
        href='https://duckduckgo.com/?q=good+images&t=brave&ia=web'
      >
        click me
      </HispterButton>
      <HispterButton>click me</HispterButton>
    </div>
  )
}

export default App
