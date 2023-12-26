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
  return (
    <>
      <Part info={info[0]}/>
      <Part info={info[1]} />
      <Part info={info[2]} />
    </>
  )
}
const Total = (exercises) => {
  return (
    <p>Number of exercises {exercises.amount}</p>
  )
}

const App = () => {
  const title = 'Half Stack application development'
  const info = [
    { part: 'Fundamentals of React',
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
      <Header title={title} />
      <Content info={info}/>
      <Total amount={info[0].exercises + info[1].exercises + info[2].exercises}/>
    </div>
  )
}

export default App