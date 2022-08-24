import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  onSubmitStatus = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onButton = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()
    //  console.log(response)
    //  console.log(data)

    if (response.ok === true) {
      this.onSubmitStatus(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="text-center">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
