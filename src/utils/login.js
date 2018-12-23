import Cookies from 'js-cookie';

export const isLogin = () => !!Cookies.get('token');

export const logout = () => {
    Cookies.set('token', '');
    console.log('====================================');
    console.log(Cookies.get('token'));
    console.log('====================================');
}

export const setToken = token => Cookies.set('token', token);