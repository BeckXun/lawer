import styled from 'styled-components';
import { Button, InputItem as input, ImagePicker } from 'antd-mobile';
import { Avater as HeadImg, GreyBlock } from '@/pages/profile/style';

const padding = '26px';

const Body = styled.div`
    background: #fff;
    height: 100%;
`;

const Avatar =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${padding};
    height: 88px;
`;

const UploadAvatar = styled.div`
    font-size: 14px;
    text-align: right;
    width: 100px;
    height: 40px;
    line-height: 40px;
`;

const InputAvatar = styled.input`
    display: none;
`;

const Main = styled.div`
    padding: 0 ${padding};
`;

const InputItem = styled(input)`
    input {
        text-align: right;
    }

    .am-list-line {
        border-bottom: 1px solid #ddd;
    }
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
    Body,
    Avatar,
    HeadImg,
    InputAvatar,
    UploadAvatar,
    GreyBlock,
    Main,
    InputItem,
    ImagePicker,
    PwdWrapper,
    Title,
    LoginBtn,
    VerifyCode,
};