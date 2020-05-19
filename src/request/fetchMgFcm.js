/**
 * @description: 获取实名认证信息
 */

import axios from 'axios';

const fetchMgFcm = ({
  gkey, 
  exts
}) => new Promise((resolve, reject) => {
  axios.get('/api/user/mg_fcm', {
    params: {
      gkey,
      exts,
      ts: Math.ceil(new Date().getTime() / 1000)
    }
  })
  .then(response => {
    const { data } = response;
    if (data.errno === 0) {
      resolve(data.data);
      return;
    }

    reject({
      errno: data.errno,
      errmsg: data.errmsg
    });
  })
  .catch(error => {
    reject(error);
  })
});

export default fetchMgFcm;