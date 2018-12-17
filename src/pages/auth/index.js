import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import Header from '@/components/Header';

class Auth extends Component {
    state = {
    }
    render() {
        return (
            <div className="auth">
                <Header title="律师认证" />
            </div>
        );
    }
};

export default Auth;