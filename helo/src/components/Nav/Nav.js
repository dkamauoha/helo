import React, { Component } from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateInput } from '../../ducks/reducer';

class Nav extends Component  {
  // console.log(props)

  logout () {
    axios.post('/api/auth/logout')
  }
  
  render (){
    return (
      <div>
        {this.props.location.pathname === '/' ? null 
        : <div>
            <div>Nav</div>
            <img src={this.props.profile_pic} alt=''/>
            <h4>{this.props.username}</h4>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button onClick={() => this.logout()}>Logout</button></Link>      
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    profile_pic: state.profile_pic
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
