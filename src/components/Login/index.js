import React, { PureComponent } from 'react';
import { isLogin } from '@/utils/login';

// 所有被本HOC包裹的组件都会在挂载前检测登录态 未登录跳转登录页面
const CheckLogin = WrappedComponent => (

    class extends PureComponent {

        componentWillMount() {
            if (!isLogin()) {
                this.props.history.replace('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>;
        }
    }
);

export default CheckLogin;