import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Display = ({ value }) => <div>{value}</div>

const App = () => {
  const[value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('Value now', newValue)
    setValue(newValue)
  }
  
  return (
    <div>
      <Display value={value}/>
      <Button handleClick={() => setToValue(1000)} text="Thousand"/>
      <Button handleClick={() => setToValue(0)} text="Reset to zero"/>
      <Button handleClick={() => setToValue(value + 1)} text="Increment"/>
    </div>
  )
}

export default App
