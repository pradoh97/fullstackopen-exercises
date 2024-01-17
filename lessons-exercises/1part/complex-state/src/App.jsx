import { useState } from 'react'

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }

  return (
    <div>
      Your progress so far:  {allClicks.join(' ')}
    </div>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }
  // Alternative using objects as state variables.
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })

  // const handleRightClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

  // const handleLeftClick = () => setClicks({...clicks, right: clicks.right + 1})
  return (
    <div>
      {left}
      <Button text={"left"} onClick={handleLeftClick}/>
      <Button text={"right"} onClick={handleRightClick} />
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      {right}
      <History allClicks={allClicks}/>
      <p>{total}</p>
    </div>
  )
}

export default App
