import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import Container from './pages/home/container';
import store from '@/store';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Profile from '@/pages/profile';
import About from '@/pages/about';
import Auth from '@/pages/auth';
import Login from '@/pages/login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
