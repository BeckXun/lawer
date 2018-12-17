import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import Header from '@/components/Header';

class About extends Component {
    state = {
    }
    render() {
        return (
            <div className="about">
                <Header title="关于我们" />
            </div>
        );
    }
};

export default About;