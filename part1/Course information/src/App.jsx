const Header = (course) => {
  return (
    <h1>{course.title}</h1>
  )
}
const Part = (info) => {
  info = info.info
  return (
    <p>{info.part} {info.exercises}</p>
  )
}
const Content = (info) => {
  info = info.info
  return(
    info.map(part => {
    return (
      <>
        <Part info={part} />
      </>
    )
  })
  )
}
const Total = (exercises) => {
  let total = 0
  exercises.amount.forEach(value => total += value.exercises)

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    { 
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: "Using props to pass data",
      exercises: 7
    },
    {
      part: "State of a component",
      exercises: 14
    }
  ]
    
  return (
    <div>
      <Header title={course} />
      <Content info={part}/>
      <Total amount={part}/>
    </div>
  )
}

export default App