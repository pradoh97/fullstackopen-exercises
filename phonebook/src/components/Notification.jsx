const Notification = ({message}) => {
  const notificationStyle = {
    fontSize: '1em',
    opacity: 1,
    backgroundColor: '#E2F7E2',
    color: '#0B720B',
    padding: '0.05em 0.25em',
    border: "0.1em solid #33A833",
    borderRadius: "0.15em",
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 0,
    right: '1.25em'
  }
  return(
    message ? <p style={notificationStyle}>{message}</p> : null
  )
}

export default Notification