// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {log: false, note: false}

  onChange = values => {
    this.setState({log: values, note: values})
  }

  render() {
    const {note, log} = this.state
    return (
      <div className="bg-cont">
        <div className="card">
          <Message details={note} />
          {log && <Login func={this.onChange} />}
          {!log && <Logout func={this.onChange} />}
        </div>
      </div>
    )
  }
}

export default Home
