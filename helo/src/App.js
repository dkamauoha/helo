import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import './App.css';

import routes from './routes';

//Components
import Nav from './components/Nav/Nav';
// import Auth from './components/Auth/Auth';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Post from './components/Post/Post';

class App extends Component {
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }
  render() {   
    // const { match, location, history } = this.props;
    // console.log(location)
    return (
      <div className="App">
        {/* {routes.props.children === routes.props.children[0] ? routes.props.children[0] : routes} */}
        {routes}
        <Nav />
        
      </div>
    );
  }
}


export default withRouter(App);
