import React, { PureComponent } from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleHeaderPop } from '@/store/actionCreators'
import './index.scss';

const { Item } = Popover;

class Header extends PureComponent {
    handleVisibleChange = (visible) => {
        
    }
    onSelect = (opt) => {
        this.props.more();
        this.props.history.push(opt.props.value);
    }
    componentDidMount() {
        this.initShare();
    }
    initShare = () => {
        window.mobShare.config({

            debug: true, // 开启调试，将在浏览器的控制台输出调试信息

            appkey: '2930122527acf', // appkey

            params: {
                url: window.location.href, // 分享链接
                title: document.title, // 分享标题
                description: '', // 分享内容
                pic: '', // 分享图片，使用逗号,隔开
                reason: '', // 自定义评论内容，只应用与QQ,QZone与朋友网
            },

            /**
             * 分享时触发的回调函数
             * 分享是否成功，目前第三方平台并没有相关接口，因此无法知道分享结果
             * 所以此函数只会提供分享时的相关信息
             * 
             * @param {String} plat 平台名称
             * @param {Object} params 实际分享的参数 { url: 链接, title: 标题, description: 内容, pic: 图片连接 }
             */
            callback: function (plat, params) {
                console.log(plat, params);
            },
        });
    }
    getRightContent = (type) => {
        let res = null;
        if (type === 'home') {
            const popList = [
                {
                    content: '个人中心',
                    path: '/profile',
                },
                {
                    content: '关于我们',
                    path: '/about',
                },
                {
                    content: '律师认证',
                    path: '/auth',
                },
            ].map(item => (
                <Item
                    key={item.content}
                    value={item.path}
                >
                    {item.content}
                </Item>
            ));
            res = (
                // overlayClassName="fortest"
                //     overlayStyle={{ color: 'currentColor' }}
                <Popover
                    visible={this.props.visible}
                    overlay={popList}
                    align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                    }}
                    onVisibleChange={this.handleVisibleChange}
                    onSelect={this.onSelect}
                >
                    <div className="icon-wrapper">
                        <Icon
                            type="ellipsis"
                            onClick={this.props.more}
                        />
                    </div>
                </Popover>
            );
        }
        if (type === 'share') {
            res = (
                <i
                    className="-mob-share-open header-share"
                    onClick={this.share}
                >
                    &#xe605;
                </i>
            );
        }
        return res;
    }
    render() {
        const { type, title } = this.props;
        const icon = type === 'home' ? null : <Icon type="left" />;
        const rightContent = this.getRightContent(type);
        
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={icon}
                    onLeftClick={() => window.history.back()}
                    rightContent={rightContent}
                >
                    {title}
                </NavBar>
            </div>
        );
    }
};

Header.propTypes = {
    type: PropTypes.oneOf(['home', 'share', 'normal']),
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    type: 'normal',
    title: '律师咨询平台',
};

const mapState = state => ({
    visible: state.getIn(['common', 'visible']),
});

const mapDispatch = dispatch => ({
    more() {
        dispatch(toggleHeaderPop());
    },
});

export default withRouter(connect(mapState, mapDispatch)(Header));