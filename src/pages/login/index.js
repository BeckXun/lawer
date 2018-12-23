import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { getVerify } from '@/utils/api';
import VerifyCode from './VerifyCode';
import {
    Main,
    Input,
    PwdWrapper,
    Title,
    LoginBtn,
} from './style';
import { setToken } from '@/utils/login';

class Login extends PureComponent {
    state = {
        phone: '',
        pwd: '',
        phoneRight: false,
        pwdRight: false,
    }
    checkPhone = () => {
        if (!/^\d{3}\s\d{4}\s\d{4}$/.test(this.state.phone)) {
            Toast.info('请输入正确的手机号');
            return false;
        }
        return true;
    }
    checkPwd = () => {
        if (!/^\d{6}$/.test(this.state.pwd)) {
            Toast.info('请输入正确的验证码');
            return false;
        }
        return true;
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
                    type="phone"
                    placeholder="手机号"
                    value={phone}
                    onChange={(phone) => this.setState({ phone })}
                />
                <PwdWrapper>
                    <Input
                        type="number"
                        maxLength={6}
                        mtp={24}
                        placeholder="验证码"
                        value={pwd}
                        onChange={(pwd) => this.setState({ pwd })}
                    />
                    <VerifyCode
                        phoneVerify={this.checkPhone}
                        getVerify={this.getVerify}
                    />
                </PwdWrapper>
                <LoginBtn onClick={this.login}>登录</LoginBtn>
            </Main>
        );
    }
    login = () => {
        if (this.checkPhone() && this.checkPwd()) {
            setToken(this.state.phone);
            this.props.history.replace('/');
        }
    }
};

const mapState = state => ({
    headImg: state.getIn(['uc', 'headImg']),
    nickname: state.getIn(['uc', 'nickname']),
    authState: state.getIn(['uc', 'authState']),
});

// const mapDispatch = dispatch => ({
//     checkLogin() {
//         dispatch(checkLogin());
//     },
// });

export default connect(mapState, null)(Login);