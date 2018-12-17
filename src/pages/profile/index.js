import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import Header from '@/components/Header';
import { Main } from './style';

class Profile extends Component {
    state = {
    }
    render() {
        return (
            <Main>
                <Header title="详细资料" />
            </Main>
        );
    }
};

export default Profile;