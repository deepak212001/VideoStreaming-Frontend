import React, { useState } from 'react'
import './Login.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Login = ({ setLoginModel }) => {

  const [loginField, setLoginField] = useState({ "username": "", "password": "" })

  const handleOnChangeInput = (event, name) => {
    setLoginField({
      ...loginField, [name]: event.target.value
    })
  }

  return (
    <div className='login'>
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
          Login
        </div>

        <div className="loginCredentials">
          <div className="userNameLogin">
            <input type="text" placeholder='Phone number, username, or email' value={loginField.username} onChange={(e) => (handleOnChangeInput(e, "username"))} className="userNameLoginUserName" />
          </div>
          <div className="userNameLogin">
            <input type="password" placeholder='Password' value={loginField.password} onChange={(e) => (handleOnChangeInput(e, "password"))}   className="userNameLoginUserName" />
          </div>
        </div>
        <div className="login_buttons">
          <div className="login-btn" >Login</div>
          <Link to={'/signup'} onClick={() => setLoginModel()} className="login-btn">SignUp</Link>
          <div className="login-btn" onClick={() => setLoginModel()}>Cancel</div>
        </div>

      </div>
    </div>
  )
}

export default Login