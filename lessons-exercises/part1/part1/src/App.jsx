const Hello = (props) => {
  console.log(props)
  return (
    <p>Hello {props.name}, you are {props.age} years old.</p>
  )
}
const App = () => {
  const friends = ['Pietro', 'Peter']
  const person = [
    { name: "Pietro", age: 4 },
    { name: "Peter", age: 10 }
  ]
  const name = 'Peter'
  const age = 10
  return (
    <>
      <p>Greetings</p>
      <Hello name={name} age={age} />
      <Hello name='Daisy' age={20} />
      <Hello name='Test' age={30 + 10} />
      <p>{person[0].name}</p>
      <p>{friends}</p>
    </>
  )
}

export default App