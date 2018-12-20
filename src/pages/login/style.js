import styled from 'styled-components';
import { Button } from 'antd-mobile';

const Main = styled.div`
    position: relative;
    box-sizing: border-box;
    background: #fff;
    height: 100%;
    padding: 98px 50px 0;
`;

const Input = styled.input`
    margin-top: ${props => props.mtp + 'px' };
    display: block;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ddd;
`;

const PwdWrapper = styled.div`
    position: relative;
`;

const Title = styled.div`
    position: absolute;
    top: 32px;
    left: 24px;
    font-size: 22px;
`;

const VerifyCode = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 44px;
    text-align: center;
`;

const LoginBtn = styled(Button)`
    margin-top: 45px;
`;

export {
    Main,
    Input,
    PwdWrapper,
    Title,
    LoginBtn,
    VerifyCode,
};