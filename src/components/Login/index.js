// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const onLoginSucess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onClickLoginButton = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    onLoginSucess(data.jwt_token)
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-section">
      <h1 className="about-route">Please Login</h1>
      <button type="button" className="button" onClick={onClickLoginButton}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
