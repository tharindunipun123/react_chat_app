import { useState } from 'react'
import './App.css'
import LoginPageUi from './component/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <LoginPageUi/>
  </>
    
  )
}



export default App
