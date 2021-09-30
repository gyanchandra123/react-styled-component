import BasicStyle from './components/BasicStyles'
import { DefaultButton, HispterButton } from './components/Button.js'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicStyle special>styled components</BasicStyle>
      <BasicStyle>styled components</BasicStyle>
      <DefaultButton>click me</DefaultButton>
      <HispterButton>hispter button</HispterButton>
    </div>
  )
}

export default App
