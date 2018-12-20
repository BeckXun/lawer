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
import { isLogin } from '@/utils/login';

const Item = List.Item;

class Profile extends PureComponent {
    render() {
        const { headImg, nickname, authState } = this.props;
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
                        onClick={() => { }}
                    >
                        我的咨询
                    </Item>
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                    >
                        消息
                    </Item>
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                    >
                        交易记录
                    </Item>
                    <Item
                        extra={authState}
                        arrow="horizontal"
                        onClick={() => { }}
                    >
                        律师认证
                    </Item>
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                    >
                        退出登录
                    </Item>
                </MyList>
            </Main>
        );
    }
    componentWillMount() {
        if (!isLogin()) {
            this.props.history.replace('/login');
        }
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

export default connect(mapState, mapDispatch)(Profile);