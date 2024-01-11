const Header = (course) => {
  return (
    <h1>{course.title}</h1>
  )
}
const Part = (info) => {
  info = info.info
  return (
    <p>{info.name} {info.exercises}</p>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
    
  return (
    <div>
      <Header title={course.name} />
      <Content info={course.parts}/>
      <Total amount={course.parts}/>
    </div>
  )
}

export default App