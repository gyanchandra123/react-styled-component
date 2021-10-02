import styled from 'styled-components/macro'
import { DefaultButton } from './components/Button'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <DefaultButton>click me</DefaultButton>
      <DefaultButton larger>click me</DefaultButton>
    </div>
  )
}

export default App
