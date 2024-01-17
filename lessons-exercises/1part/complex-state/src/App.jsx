import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleRightClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

  const handleLeftClick = () => setClicks({...clicks, right: clicks.right + 1})
  return (
    <div>
      {clicks.left}
      <button onClick={handleRightClick}>left</button>
      <button onClick={handleLeftClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App
