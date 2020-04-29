import { fromJS } from 'immutable';
import axios from 'axios';

import {
  FETCH_REAL_NAME_BEGIN,
  FETCH_REAL_NAME_SUCCESS,
  FETCH_REAL_NAME_FAILURE
} from '../constants';

const INDEX = 'realName';

export const fetchRealName = ({
    appkey, 
    qids, 
    platform, 
    idcard_check_type
  }) => dispatch => {
  dispatch({ type: FETCH_REAL_NAME_BEGIN });

  return new Promise((resolve, reject) => {
    axios.get('/user/open_check_auth', {
      params: {
        appkey,
        qids,
        platform,
        idcard_check_type,
        ts: Math.ceil(new Date().getTime() / 1000)
      }
    })
    .then(response => {
      if (response.errno === 0) {
        dispatch({
          type: FETCH_REAL_NAME_SUCCESS,
          data: response.data
        });
      } else {
        dispatch({
          type: FETCH_REAL_NAME_FAILURE,
          errno: response.errno,
          errmsg: response.errmsg
        })
      }

      resolve(response);
    })
    .catch(error => {
      dispatch({
        type: FETCH_REAL_NAME_FAILURE,
        data: error
      });

      reject(error);
    })
  });
}

export const reducer = (state, action) => {
  switch (action.type) {
  case FETCH_REAL_NAME_BEGIN:
    return state.setIn([INDEX, 'fetch', 'fetching'], true);
  case FETCH_REAL_NAME_SUCCESS:
    return state.set(INDEX, 'fetch', fromJS({
      fetching: false,
      data: action.data
    }));
  case FETCH_REAL_NAME_FAILURE:
    return state.set(INDEX, 'fetch', fromJS({
      fetching: false,
      errno: action.errno,
      errmsg: action.errmsg
    }));
  default:
    return state;
  }
}