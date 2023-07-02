import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {FaApple} from 'react-icons/fa'

import SignInGoogle from '../SignInGoogle'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onClickRegister = props => {
    const {history} = this.props
    history.replace('/register')
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    const {username, password} = this.state
    const userDetails = {username, password}
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const fetchedData = await response.json()

    if (response.ok === true) {
      this.onSuccess(fetchedData.jwt_token)
    } else {
      this.onFailure(fetchedData.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <div className="lg-sign-in-left-side-container">
          <h1 className="left-side-heading">Board.</h1>
        </div>
        <div className="sign-in-form-container">
          <div className="right-side-container">
            <h1 className="sign-in-heading">Sign In</h1>
            <p className="sign-in-description">Sign in to your account</p>
            <div className="sign-in-with-container">
              <SignInGoogle />
              <button type="button" className="sign-in-with-button">
                <FaApple size={20} color="grey" />
                <p className="sign-in-with-text">Sign in with Apple</p>
              </button>
            </div>
            <div className="login-card-container">
              <form onSubmit={this.onSubmitForm}>
                <label htmlFor="username" className="label-heading">
                  Email address
                </label>
                <br />
                <input
                  type="text"
                  placeholder="rahul"
                  value={username}
                  id="username"
                  className="input-style"
                  onChange={this.onChangeUsername}
                />
                <br />
                <label htmlFor="password" className="label-heading">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="rahul@2021"
                  value={password}
                  id="password"
                  className="input-style"
                  onChange={this.onChangePassword}
                />
                <br />
                <p className="forgot-text">Forgot password?</p>
                <button type="submit" className="login-btn">
                  Sign In
                </button>
                {showErrorMsg ? <p className="error-msg">*{errorMsg}</p> : ''}
              </form>
            </div>
            <p className="register-account-text" onClick={this.onClickRegister}>
              Don't have an account{' '}
              <span className="forgot-text">Register here</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
