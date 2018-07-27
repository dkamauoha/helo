import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Auth.css'

class Auth extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser () {
    axios.post('/api/auth/register', {username: this.state.username, password: this.state.password})
      .then(res => console.log(res.data))
  }

  login () {
    axios.post('/api/auth/login', {username: this.state.username, password: this.state.password})
    .then(res => console.log(res.data))
  }

  render() {
    // console.log(this.props.location)
    // console.log(this.state)
    return (
      <div className='auth-display'>
        <h1>Helo</h1>
        <div >
          <p>Username:</p>
          <input name='username'
            onChange={e => this.handleChange(e)}/>
        </div>
        <div >
          <p>Password:</p>
          <input name='password'
            onChange={e => this.handleChange(e)}/>
        </div>
        <div>
          <Link to='/dashboard'><button onClick={() => this.addUser()}>Register</button></Link>
          <Link to='/dashboard'><button>Login</button></Link>
        </div>
      </div>
    )
  }
}

export default Auth