// Write your code here
import './index.css'

const Logout = props => {
  const {func} = props

  const clicked = () => {
    func(true)
  }

  return (
    <button className="but" onClick={clicked} type="button">
      Login
    </button>
  )
}
export default Logout
