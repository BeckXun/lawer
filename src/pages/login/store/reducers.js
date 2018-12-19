import { fromJS } from 'immutable';
// import { SET_HOT_CONSULT, TOGGLE_HEADER_POP } from './actionTypes';
import headImg from '@/assets/images/headImg.svg';

const ucState = fromJS({
    headImg,
    nickname: 'beck',
    authState: '未认证',
});

// reducer只能返回新state 绝不能修改它
// reducer必须是纯函数 给固定的输入 就有固定的输出 无副作用
const ucReducer = (state = ucState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case SET_HOT_CONSULT:
        //     return state.set('hotConsults', payload);
        // case TOGGLE_HEADER_POP:
        //     return state.set('visible', !state.get('visible'));
        default:
            return state;
    }
};


export default ucReducer;
