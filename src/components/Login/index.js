// Write your code here
import './index.css'

const Login = props => {
  const {func} = props

  const clicked = () => {
    func(false)
  }

  return (
    <button className="but" onClick={clicked} type="button">
      Logout
    </button>
  )
}

export default Login
