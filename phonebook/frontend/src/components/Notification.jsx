const Notification = ({message, style}) => {
  const notification = {
    fontSize: '1em',
    opacity: 1,
    padding: '0.05em 0.25em',
    border: "0.1em solid",
    borderRadius: "0.15em",
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 0,
    right: '1.25em'
  }
  const notificationSuccess = {
    backgroundColor: '#E2F7E2',
    color: '#0B720B',
    borderColor: "#33A833",
  }
  const notificationError = {
    backgroundColor: '#F7E2E2',
    color: '#720B0B',
    borderColor: "#A83333",
  }
  return(
    message ? <p style={style == 'success' ? {...notification, ...notificationSuccess} : {...notification, ...notificationError}}>{message}</p> : null
  )
}

export default Notification