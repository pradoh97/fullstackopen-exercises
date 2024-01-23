import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [statistics, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const submitFeedback = (feedback) => {
    if (feedback === "good") setFeedback({ ...statistics, good: statistics.good + 1 })
    else if (feedback === "neutral") setFeedback({ ...statistics, neutral: statistics.neutral + 1 })
    else setFeedback({ ...statistics, bad: statistics.bad + 1 })
  }
  
  return (
    <>
      <Header text="Give feedback"/>
      <Button text="Good" onClick={() => submitFeedback("good")}/>
      <Button text="Neutral" onClick={() => submitFeedback("neutral")} />
      <Button text="Bad" onClick={() => submitFeedback("bad")} />
      <Header text="Statistics"/>
      <p>{statistics.good}</p>
      <p>{statistics.neutral}</p>
      <p>{statistics.bad}</p>
    </>
  )
}

export default App
