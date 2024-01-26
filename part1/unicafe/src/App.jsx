import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>
const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const Statistics = ({text, value, percentage = ""}) => <tr><td>{text}:   {value}{percentage}</td></tr>

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
    let { good, neutral, bad, totalSubmissions, averageFeedback, positiveFeedback} = statistics

    if (feedback === 'good') good += 1
    else if (feedback === 'neutral') neutral += 1
    else bad += 1

    totalSubmissions = good + neutral + bad
    averageFeedback = getAverageFeedback(good, bad, totalSubmissions)
    positiveFeedback = +((good / totalSubmissions) * 100).toFixed(2)
    
    setFeedback({good, neutral, bad, total: totalSubmissions, average: averageFeedback, positive: positiveFeedback})
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
        <table>
          <tbody>
            <Statistics text="good" value={statistics.good}/>
            <Statistics text="neutral" value={statistics.neutral} />
            <Statistics text="bad" value={statistics.bad}/>
            <Statistics text="total" value={statistics.total}/>
            <Statistics text="average" value={statistics.average}/>
            <Statistics text="positive" value={statistics.positive} percentage={"%"} />
          </tbody>
        </table>
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
