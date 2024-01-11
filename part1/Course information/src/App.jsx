const Header = (course) => {
  console.log(course)
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
  const part1 = { 
      part: 'Fundamentals of React',
      exercises: 10
    }
  const part2 = {
      part: "Using props to pass data",
      exercises: 7
    }
  const part3 = {
      part: "State of a component",
      exercises: 14
    }
    
  return (
    <div>
      <Header title={course} />
      <Content info={part1}/>
      <Content info={part2} />
      <Content info={part3} />
      <Total amount={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App