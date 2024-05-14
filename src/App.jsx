import { useState } from 'react'
import AgeForm from './components/AgeForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AgeForm/>
    </>
  )
}

export default App
