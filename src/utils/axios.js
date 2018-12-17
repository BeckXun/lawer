import axios from 'axios';
// import { api } from '../config/api';
// import { clear } from './auth';

const service = axios.create({
    timeout: 5000,
    headers: {
        post: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    },
    emulateJSON: true,
    withCredentials: true,
});

service.interceptors.request.use((config) => {
    const host = 'http://localhost:3000/';
    
    config.url = `${host}${config.url}`;

    config.headers = {
        'Accept-Language': 'zh-CN',
        ...config.headers,
    };

    config.params = {
        r: Math.random().toString(36).substr(2),
        ...config.params,
    };

    return config;
}, error => Promise.reject(error));

service.interceptors.response.use((res) => {
    // if (res.data['err-code'] === 'token-not-valid' || res.data['err-code'] === 'login-required' || res.data.code === 512) {
    //     // Clear token cookie
    //     // clear();

    //     // 非预渲染时跳转登录页
    //     window.location.assign('/login');

    //     return Promise.reject(res.data);
    // }
    
    return res.data;
}, error => Promise.reject(error));

const get = async (...options) => {
    try {
        const res = await service.get(...options);
        return res;
    } catch (e) {
        return Promise.resolve({
            status: 'error',
            code: 500,
            message: 'API Error',
            'err-msg': 'API Error',
        });
    }
};

const post = async (...options) => {
    try {
        const res = await service.post(...options);
        return res;
    } catch (e) {
        return Promise.resolve({
            status: 'error',
            code: 500,
            message: 'API Error',
            'err-msg': 'API Error',
        });
    }
};

export {
    get,
    post,
};
