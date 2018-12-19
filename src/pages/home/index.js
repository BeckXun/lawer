import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
// import { NavBar, Icon } from 'antd-mobile';
import Header from '@/components/Header';
import FastConsult from '@/pages/home/components/fastConsult/index';
import Title from '@/components/Title';
import ConsultHeader from '@/components/ConsultHeader';
import { getHotConsultAction } from '@/store/actionCreators';

class Home extends Component {
    reply = () => {
        console.log('reply');
    }
    render() {
        return (
            <div className="home">
                <Header type="home" />
                <FastConsult />
                <div className="hot-consult">
                    <Title content="热点咨询" />
                    {
                        this.props.hotConsults.map((item, index) => (
                            <ConsultHeader
                                key={index}
                                desc={item.get('desc')}
                                city={item.get('city')}
                                type={item.get('type')}
                                reply={this.reply}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.getHotConsult();
    }
};

const mapState = state => ({
    hotConsults: state.getIn(['common', 'hotConsults']),
});

const mapDispatch = dispatch => ({
    getHotConsult() {
        dispatch(getHotConsultAction());
    },
});

export default connect(mapState, mapDispatch)(Home);