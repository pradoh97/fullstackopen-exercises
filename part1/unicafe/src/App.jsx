import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const Statistics = ({value, percentage = ""}) => <p>{value}{percentage}</p>

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
    let {good, neutral, bad, total, average, positive} = statistics

    if (feedback === 'good') good += 1
    else if (feedback === 'neutral') neutral += 1
    else bad += 1

    total = good + neutral + bad
    average = getAverageFeedback(good, bad, total)
    positive = +((good / total) * 100).toFixed(2)
    
    setFeedback({good, neutral, bad, total, average, positive})
  }

  const getAverageFeedback = (good, bad, total) => ((good - bad) / total || 0 )
  if(statistics.total){
    return (
      <>
        <Header text="Give feedback"/>
        <Button text="Good" onClick={() => submitFeedback("good")}/>
        <Button text="Neutral" onClick={() => submitFeedback("neutral")} />
        <Button text="Bad" onClick={() => submitFeedback("bad")} />
        <Header text="Statistics"/>
        <Statistics value={statistics.good}/>
        <Statistics value={statistics.neutral}/>
        <Statistics value={statistics.bad}/>
        <Statistics value={statistics.total}/>
        <Statistics value={statistics.average}/>
        <Statistics value={statistics.positive} percentage={"%"} />
      </>
    )
  }
  return (
      <>
      <Header text="Give feedback" />
      <Button text="Good" onClick={() => submitFeedback("good")} />
      <Button text="Neutral" onClick={() => submitFeedback("neutral")} />
      <Button text="Bad" onClick={() => submitFeedback("bad")} />
      <Header text="Statistics" />
      <p>No feedback given</p>
      </>
  )
}

export default App
