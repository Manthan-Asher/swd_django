import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  createBatchingNetworkInterface,
} from 'react-apollo'
import Home from './Routes/home/Home';
import Layout from './Components/Layout';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

// react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI,
// especially useful for the buttons.
injectTapEventPlugin();

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:8000/gql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin',
  },
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    loggedIn: false,
    latestNews : [
  {
    title: 'Winner of Aditya Birla Group scholarship 2017',
    link: 'blah'
  }, {
    title: 'Important notice regarding MCN scholarship',
    link: 'blah'
  }
],
  };

  }

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" render={ () => 
        (
          <Layout isLoggedIn={this.state.loggedIn}>
            <Home news={this.state.latestNews}/>
            </Layout>
        )}/>

        </Switch>
      </Router>
    )
  }
}


export default App