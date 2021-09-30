import BasicStyle from './components/BasicStyles'
import { DefaultButton } from './components/Button.js'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicStyle className='title'>styled components</BasicStyle>
      <DefaultButton className='btn'>click me</DefaultButton>
    </div>
  )
}

export default App
