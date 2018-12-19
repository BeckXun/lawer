import React, { PureComponent } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import Header from '@/components/Header';

class Auth extends PureComponent {
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