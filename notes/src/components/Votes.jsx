const Votes = ({quantity}) => {
    let message = "Has " + quantity + " "
    
    if(quantity === 1){
      message += "vote."
    } else {
      message += "votes."
    }
  
    return message
  }

  export default Votes