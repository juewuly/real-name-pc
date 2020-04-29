import axios from 'axios';

const addRealName = ({
  appkey,
  qid,
  name,
  id,
  platform,
  idcard_check_type
}) => new Promise((resolve, reject) => {
  axios.post('/user/open_auth', {
    appkey,
    qid,
    name,
    id,
    platform,
    idcard_check_type,
    ts: Math.ceil(new Date().getTime() / 1000)
  })
  .then(res => resolve(res.data))
  .catch(err => reject(err));
});

export default addRealName;