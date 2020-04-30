import { fromJS } from 'immutable';
import axios from 'axios';

import {
  ADD_REAL_NAME_BEGIN,
  ADD_REAL_NAME_SUCCESS,
  ADD_REAL_NAME_FAILURE
} from '../constants';

const INDEX = 'realName';

export const addRealName = ({
    appkey,
    qid,
    name,
    id,
    platform,
    idcard_check_type,
  }) => dispatch => {

  dispatch({ type: ADD_REAL_NAME_BEGIN });

  return new Promise((resolve, reject) => {
    axios.post('/user/open_auth', {
      appkey,
      qid,
      name,
      id,
      platform,
      idcard_check_type,
      ts: Math.ceil(new Date().getTime() / 1000)
    })
    .then(res => {
      const { data } = res;
      if (data.error_code === '0') {
        dispatch({
          type: ADD_REAL_NAME_SUCCESS,
          data: data
        });
      } else {
        dispatch({
          type: ADD_REAL_NAME_FAILURE,
          errno: data.error_code,
          errmsg: data.error
        })
      }

      resolve(data);
    })
    .catch(err => {
      dispatch({
        type: ADD_REAL_NAME_FAILURE,
        data: err
      });

      reject(err);
    })
  });
}

export const reducer = (state, action) => {
  switch (action.type) {
  case ADD_REAL_NAME_BEGIN:
    return state.setIn([INDEX, 'add', 'posting'], true);
  case ADD_REAL_NAME_SUCCESS:
    return state.setIn([INDEX, 'add'], fromJS({
      posting: false,
      result: action.data
    }));
  case ADD_REAL_NAME_FAILURE:
    return state.setIn([INDEX, 'add'], fromJS({
      posting: false,
      errno: action.errno,
      errmsg: action.errmsg
    }));
  default:
    return state;
  }
}