import styled from 'styled-components';
import { Button, InputItem as input, ImagePicker as imgPicker, ActivityIndicator } from 'antd-mobile';
import { Avater as HeadImg, GreyBlock } from '@/pages/profile/style';

const padding = '26px';

const Body = styled.div`
    background: #fff;
    height: 100%;
`;

const Avatar =styled.div.attrs({
    className: 'flex-between-center',
})`
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
    padding-left: 0 !important;

    input {
        text-align: right;
    }

    .am-list-line {
        border-bottom: 1px solid #ddd;
    }
`;

const ImagePicker = styled(imgPicker)`
    width: 152px;
    display: inline-block;

    .am-image-picker-list {
        padding: 0;
        margin-bottom: 0;

        .am-flexbox {
            margin: 0;

            .am-flexbox-item {
                margin: 0;
                height: 94px;
            }
        }
    }
`;

const BaseText = styled.div`
    font-size: 14px;
    height: 20px;
    line-height: 20px;
`;

const UploadTitle = styled(BaseText)`
    margin: 20px 0 18px;
`;

const UploadDesc = styled(BaseText)`
    margin-top: 8px;
`;

const SubmitBtn = styled(Button)`
    margin-top: 48px;
    font-size: 14px;
`;

const Loading = styled(ActivityIndicator);

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
    UploadTitle,
    UploadDesc,
    SubmitBtn,
    Loading,
};