import axios from 'axios';

const fetchRealName = ({
  appkey, 
  qids, 
  platform, 
  idcard_check_type
}) => new Promise((resolve, reject) => {
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
    const { data } = response;
    if (data.error_code === '0') {
      resolve(data.ret[0]);
      return;
    }

    reject({
      errno: data.error_code,
      errmsg: data.error
    });
  })
  .catch(error => {
    reject(error);
  })
});

export default fetchRealName;