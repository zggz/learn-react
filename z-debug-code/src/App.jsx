import { useState, useEffect } from 'react'

const Temp = ({ title, count }) => {
  return (
    <div className="tempClass">
      Temp {title} count: {count}
    </div>
  )
}

const App = () => {
  debugger

  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    console.log('123')
    debugger
  }, [])
  return (
    <div className="appClass">
      <button onClick={add}>Add Button</button>
      <Temp title="children" count={count} />
    </div>
  )
}

export default App
