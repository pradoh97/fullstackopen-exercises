const Header = (course) => {
  return (
    <h1>{course.title}</h1>
  )
}
const Content = (info) => {
  return (
    <p>{info.body} {info.exercises}</p>
  )
}
const Total = (exercises) => {
  return (
    <p>Number of exercises {exercises.amount}</p>
  )
}

const App = () => {
  const title = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header title={title} />
      <Content body={part1} exercises={exercises1} />
      <Content body={part2} exercises={exercises2} />
      <Content body={part3} exercises={exercises3} />
      <Total amount={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App