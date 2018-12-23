import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd-mobile';
import Header from '@/components/Header';
import {
    Main,
    Top,
    Avater,
    Name,
    MyList,
    GreyBlock,
} from './style';
import { logout } from '@/utils/login';
import CheckLogin from '@/components/Login';

const Item = List.Item;

class Profile extends PureComponent {
    render() {
        const { headImg, nickname, authState, history } = this.props;
        const { push } = history;
        return (
            <Main>
                <Header title="详细资料" />
                <Top>
                    <Avater src={headImg} />
                    <Name>{nickname}</Name>
                </Top>
                <GreyBlock />
                <MyList className="my-list">
                    <Item
                        arrow="horizontal"
                        onClick={() => push('/consult-detail')}
                    >
                        我的咨询
                    </Item>
                    <Item
                        arrow="horizontal"
                        onClick={() => push('/msg')}
                    >
                        消息
                    </Item>
                    <Item
                        arrow="horizontal"
                        onClick={() => push('/record')}
                    >
                        交易记录
                    </Item>
                    <Item
                        extra={authState}
                        arrow="horizontal"
                        onClick={() => push('/auth')}
                    >
                        律师认证
                    </Item>
                    <Item
                        arrow="horizontal"
                        onClick={this.logoutHandler}
                >
                    退出登录
                    </Item>
                </MyList>
            </Main>
        );
    }
    logoutHandler = () => {
        logout();
        this.props.history.replace('/login');
    }
};

const mapState = state => ({
    headImg: state.getIn(['uc', 'headImg']),
    nickname: state.getIn(['uc', 'nickname']),
    authState: state.getIn(['uc', 'authState']),
});

export default connect(mapState, null)(CheckLogin(Profile));