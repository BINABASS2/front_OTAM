import React from 'react'
import './Login.css'

function Login() {
  return (
    <body class="log-body">
      <div class="log-form-container">
          <form class="log-account-form">
              <h2>Create an account</h2>
              <p>To get started, you'll need to create an account.</p>
              <input type="email" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <button type="submit" class="register">Apply Now</button>
              <p class="account">Have an account?</p>
              <a href="/Student" class="login-link">Login here</a>
          </form>
      </div>
    </body>
  )
}

export default Login
