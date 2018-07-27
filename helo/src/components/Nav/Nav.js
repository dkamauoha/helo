import React from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

function Nav (props)  {
  console.log(props.location)
  
  return (
    <div>
      {props.location.pathname === '/' ? null 
      : <div>
          <div>Nav</div>
          <Link to='/dashboard'><button>Home</button></Link>
          <Link to='/post/:postid'><button>New Post</button></Link>
          <Link to='/'><button>Logout</button></Link>      
        </div>
      }
    </div>
  )
}

export default withRouter(Nav)
