import { useState } from 'react'

function App() {
  const [counter, setCount] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCount(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCount(counter - 1)
  }
  const resetCounter = () => {
    console.log('resetting to zero, value before', counter)
    setCount(0)
  } 
  return (
      <div>
        <Display counter={counter} />
        <Button onClick={increaseByOne} text="Add!"/>
        <Button onClick={decreaseByOne} text="Subtract!" />
        <Button onClick={resetCounter} text={"Zero!"}/>
      </div>
  )
}

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

export default App
