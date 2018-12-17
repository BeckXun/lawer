import { fromJS } from 'immutable';
import { SET_HOT_CONSULT, TOGGLE_HEADER_POP } from "./actionTypes";
import { getHotConsult } from '@/utils/api';

export const getHotConsultAction = payload => (async (dispatch) => {
    const res = await getHotConsult(payload);
    dispatch(setHotConsultAction(fromJS(res.data || [])));
});

export const setHotConsultAction = payload => ({
    type: SET_HOT_CONSULT,
    payload,
});

export const toggleHeaderPop = () => ({
    type: TOGGLE_HEADER_POP,
});
