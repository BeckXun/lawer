import { get, post } from './axios';

/**
 * 获取热门咨询列表
 *
 * @param {Object} params 请求参数
 * @return {axios}
 */
export function getHotConsult(params) {
    return get('mock/hot.json', {
        params,
    });
};

/**
 * 获取登录验证码
 *
 * @param {Object} params 请求参数
 * @return {axios}
 */
export function getVerify(params) {
    return get('mock/verify.json', {
        params,
    });
};

/**
 * 创建虚拟币提币订单
 *
 * @param {Object} data 请求数据
 * @param {Object} headers request.haders
 * @return {axios}
 */
export function createVirtualWithdraw(data, headers) {
    return post('v1/dw/withdraw/create', data, {
        headers,
    });
};