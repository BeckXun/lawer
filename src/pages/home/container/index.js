import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
// import Loadable from 'react-loadable';
import Home from '@/pages/home';
import Profile from '@/pages/profile';
import About from '@/pages/about';
import Auth from '@/pages/auth';


// import Loading from './Loading';

// const Order = Loadable({
//     loader: () => import(/* webpackChunkName: "order" */'../Order/Order'),
//     loading: Loading,
// });

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/about" component={About} />
                <Route exact path="/auth" component={Auth} />
            </div>
        );
    }
};

export default connect()(Main);