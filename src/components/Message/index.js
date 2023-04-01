// Write your code here
import './index.css'

const Message = props => {
  const {details} = props
  if (details === true) {
    return <h1 className="note-style">Welcome User</h1>
  }
  return <h1 className="note-style">Please Login</h1>
}

export default Message
