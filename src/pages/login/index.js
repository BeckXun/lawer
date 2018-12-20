import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getVerify } from '@/utils/api';
import VerifyCode from './VerifyCode';
import {
    Main,
    Input,
    PwdWrapper,
    Title,
    LoginBtn,
} from './style';

class Login extends PureComponent {
    state = {
        phone: '',
        pwd: '',
    }
    phoneChange = (e) => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }
    getVerify = () => {
        getVerify().then((res) => {
            console.log(res, 'verify res');
        });
    }
    render() {
        const { phone, pwd } = this.state;
        return (
            <Main>
                <Title>登录</Title>
                <Input
                    placeholder="手机号"
                    value={phone}
                    onChange={phone => this.setState({ phone })}
                />
                <PwdWrapper>
                    <Input
                        mtp={24}
                        placeholder="验证码"
                        value={pwd}
                        onChange={pwd => this.setState({ pwd })}
                    />
                    <VerifyCode getVerify={this.getVerify} />
                </PwdWrapper>
                <LoginBtn>登录</LoginBtn>
            </Main>
        );
    }
    componentWillMount() {
    }
};

const mapState = state => ({
    headImg: state.getIn(['uc', 'headImg']),
    nickname: state.getIn(['uc', 'nickname']),
    authState: state.getIn(['uc', 'authState']),
});

const mapDispatch = dispatch => ({
    // checkLogin() {
    //     dispatch(checkLogin());
    // },
});

export default connect(mapState, mapDispatch)(Login);