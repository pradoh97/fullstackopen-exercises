const Contact = ({name, number, deleteContact}) => {
  return(
  <li> 
    {name} {number}
    
     <button onClick={deleteContact}>Delete</button>
  </li>
  )
}

export default Contact