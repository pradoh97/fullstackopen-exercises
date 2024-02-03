import Header from './Header'
import Total from './Total'
import Content from './Content'

const Course = ({course}) =>{
  
  const quantites=course.parts.map(part => part.exercises)

  return (
    <div>
      <Header content={course.name} />
      <Content info={course.parts}/>
      <Total quantities={quantites}/>
    </div>
  )
}

export default Course