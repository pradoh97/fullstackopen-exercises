import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [statistics, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
    positive: 0
  })

  const submitFeedback = (feedback) => {
    
    if (feedback === 'good') statistics.good += 1
    else if (feedback === 'neutral') statistics.neutral += 1
    else statistics.bad += 1

    statistics.average = getAverageFeedback(statistics)
    statistics.total = getTotalFeedback(statistics)
    statistics.positive = +((statistics.good / getTotalFeedback(statistics)) * 100).toFixed(2)
    
    setFeedback({ ...statistics})
  }

  const getTotalFeedback = ({good, neutral, bad} = statistics) => (good + neutral + bad)
  const getAverageFeedback = ({ good, neutral, bad } = statistics) => ((good - bad) / getTotalFeedback() || 0 )
  
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
      <p>{statistics.total}</p>
      <p>{statistics.average}</p>
      <p>{statistics.positive}%</p>
    </>
  )
}

export default App
