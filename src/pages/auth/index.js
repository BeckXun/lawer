import React, { PureComponent } from 'react';
import Header from '@/components/Header';
import { Body, Avatar, HeadImg, InputAvatar, UploadAvatar, GreyBlock, Main, InputItem, ImagePicker, UploadTitle, UploadDesc, SubmitBtn } from './style';
import { ActivityIndicator as Loading } from 'antd-mobile';
class Auth extends PureComponent {
    state = {
        avatar: '',
        certificate: [],
        yearCheck: [],
        showLoading: false,
    }
    selectAvatar = () => {
        const file = this.refs.avatar.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => this.setState({ avatar: reader.result});
    }
    onChange = (state, files) => {
        this.setState({
            [state]: files,
        });
    }
    onAddImageClick = (e) => {
        console.log(e)
    }
    submit = () => {
        this.setState({
            showLoading: true,
        });
    }
    render() {
        const { avatar, name, company, certificate, yearCheck, showLoading } = this.state;
        return (
            <Body>
                <Header
                    title="律师认证"
                    type="share"
                />
                <Avatar>
                    <HeadImg src={avatar} />
                    <UploadAvatar className="needsclick" onClick={() => this.refs.avatar.click()}>
                        上传头像
                        <InputAvatar
                            type="file"
                            accept="image/*"
                            onChange={this.selectAvatar}
                            ref="avatar"
                        />
                    </UploadAvatar>
                </Avatar>
                <GreyBlock />
                <Main>
                    <InputItem
                        value={name}
                        onChange={(name) => this.setState({ name })}
                        placeholder="与证书一致"
                    >姓名</InputItem>
                    <InputItem
                        value={company}
                        onChange={(company) => this.setState({ company })}
                        placeholder="请填写"
                    >职业律所</InputItem>
                    <UploadTitle>请依次上传职业证件照片页和年检页面</UploadTitle>
                    <div className="flex-between-center">
                        <div>
                            <ImagePicker
                                length={1}
                                files={certificate}
                                onChange={this.onChange.bind(this, 'certificate')}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={certificate.length < 1}
                            />
                            <UploadDesc>证件照片页</UploadDesc>
                        </div>
                        <div>
                            <ImagePicker
                                length={1}
                                files={yearCheck}
                                onChange={this.onChange.bind(this, 'yearCheck')}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={yearCheck.length < 1}
                            />
                            <UploadDesc>年检页面</UploadDesc>
                        </div>
                    </div>
                    <SubmitBtn onClick={this.submit}>提交审核</SubmitBtn>
                    <Loading
                        animating={showLoading}
                        text="正在上传图片"
                        toast={true}
                    />
                </Main>
            </Body>
        );
    }
};

export default Auth;