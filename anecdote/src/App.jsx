import { useState } from 'react'
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
const Votes = ({quantity}) => {
  let message = "Has " + quantity + " "
  
  if(quantity === 1){
    message += "vote."
  } else {
    message += "votes."
  }

  return message
}

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [anecdote, setAnecdote] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  const [topVotedAnecdote, setTopVotedAnecdote] = useState(0)

  const pickRandomAnecdote = () => Math.floor(Math.random() * anecdotes.length)
  
  const setQuote = () => {
    let anecdoteNumber = pickRandomAnecdote()
    setAnecdote(anecdoteNumber)
  }

  const setAnecdoteVotes = anecdoteNumber => {
    let votesNew = [...votes]
    votesNew[anecdoteNumber] += 1

    setTopVotedAnecdote((votesNew.indexOf(votesNew.reduce((a,b) => Math.max(a,b), -Infinity))))
    setVote(votesNew)
  }
  return (
    <>
      <h1>Anecdote of the day</h1>
      <Button text="Quote of the day" onClick={() => setQuote()} />
      <Button text="Upvote" onClick={() => setAnecdoteVotes(anecdote)} />
      <p>{anecdotes[anecdote]}</p>
      <Votes quantity={votes[anecdote]}/>
      <h1>Top voted anecdote so far</h1>
      <p>{anecdotes[topVotedAnecdote]}</p>
    </>
  )
}

export default App
