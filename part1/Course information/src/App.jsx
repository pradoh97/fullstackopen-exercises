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
      <Part info={info}/>
    </>
  )
}
const Total = (exercises) => {
  return (
    <p>Number of exercises {exercises.amount}</p>
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
      <Content info={part[0]}/>
      <Content info={part[1]} />
      <Content info={part[2]} />
      <Total amount={part[0].exercises + part[1].exercises + part[2].exercises}/>
    </div>
  )
}

export default App