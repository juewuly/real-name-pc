/**
 * @description: 检查充值金额是否允许充值
 */


import axios from 'axios';

const checkAmount = ({ amount, gkey }) => new Promise((resolve, reject) => {
  axios.post('/api/order/check', {
    amount,
    gkey
  })
  .then(res => {
    const { data } = res;
    if (data.errno === 0) {
      resolve(data.data);
      return;
    }

    reject({
      errno: data.errno,
      errmsg: data.errmsg
    });
  })
  .catch(err => reject(err))
});

export default checkAmount;