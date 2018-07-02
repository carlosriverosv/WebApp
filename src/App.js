import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Landing from './components/Landing';
import Footer from './components/Footer';
import User from './components/User';

class App extends Component {

  state = {
    user: {
      name: '',
      email: '',
      token: '',
      slug: ''
    },
    redirectToProfile: false,
    firstTry: true
  };

  login = (user, pass) => {
    console.log(user + ' ' + pass);
    this.setState(
      {
        user: {
          name: 'carlos',
          email: user,
          token: '11111',
          slug: 'carlos'
        },
        redirectToProfile: true,
        firstTry: false,
      }
    );
  };


  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={props => (
              <Landing
                handleLogin={this.login}
                redirectToProfile={this.state.redirectToProfile}
                firstTry={this.state.firstTry}
                slug = {this.state.user.slug}
              />
            )} />
            <Route path={`/user/${this.state.user.slug}`} render={props => (
              <User
                name={this.state.user.name}

              />
            )} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
