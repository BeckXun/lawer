import React, { PureComponent } from 'react';
import {
    VerifyCode,
} from './style';

class Verify extends PureComponent {
    state = {
        verifyTime: 0,
        timer: null,
    }
    verifyHandler = () => {
        if (this.state.timer) {
            return;
        }

        this.props.getVerify();

        const newTimer = setInterval(() => {
            const { verifyTime } = this.state;
            if (verifyTime <= 1) {
                clearInterval(this.state.timer);
                return this.setState({
                    timer: null,
                    verifyTime: 0,
                });
            }
            this.setState({
                verifyTime: verifyTime - 1,
            });
        }, 1000);

        this.setState({
            verifyTime: 60,
            timer: newTimer,
        });
    }
    render() {
        const { verifyTime } = this.state;
        return (
            <VerifyCode onClick={this.verifyHandler}>
                {verifyTime ? `${verifyTime} s` : '获取验证码'}
            </VerifyCode>
        );
    }
};


export default Verify;