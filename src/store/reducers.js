import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import Cookies from 'js-cookie';
import { SET_HOT_CONSULT, TOGGLE_HEADER_POP, CHECK_LOGIN } from './actionTypes';
import ucReducer from '@/pages/login/store/reducers';

const commonState = fromJS({
    hotConsults: [],
    visible: false,
    isLogin: false,
});

// reducer只能返回新state 绝不能修改它
// reducer必须是纯函数 给固定的输入 就有固定的输出 无副作用
const commonReducer = (state = commonState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_HOT_CONSULT:
            return state.set('hotConsults', payload);
        case TOGGLE_HEADER_POP:
            return state.set('visible', !state.get('visible'));
        case CHECK_LOGIN:
            const isLogin = !!Cookies.get('token');
            return state.set('isLogin', isLogin);
        default:
            return state;
    }
};


const reducers = combineReducers({
    common: commonReducer,
    uc: ucReducer,
});

export default reducers;
