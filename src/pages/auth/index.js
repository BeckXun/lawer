import React, { PureComponent } from 'react';
import Header from '@/components/Header';
import { Body, Avatar, HeadImg, InputAvatar, UploadAvatar, GreyBlock, Main, InputItem, ImagePicker } from './style';

class Auth extends PureComponent {
    state = {
        avatar: '',
        certificate: '',
    }
    selectAvatar = () => {
        const file = this.refs.avatar.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => this.setState({ avatar: reader.result});
    }
    clickInpurt = (e) => {
        console.log(e)
    }
    onAddImageClick = (e) => {
        
    }
    render() {
        const { avatar, name, company, certificate } = this.state;
        return (
            <Body>
                <Header title="律师认证" />
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
                    <ImagePicker
                        length="1"
                        files={certificate}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={certificate.length === 1}
                        onAddImageClick={this.onAddImageClick}
                    />
                </Main>
            </Body>
        );
    }
};

export default Auth;