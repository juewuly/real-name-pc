/**
 * @author: liuyang9
 * @description: 防沉迷提示信息集合
 */

import tipType from './tipType';
import tipEntity from './tipEntity';

// 通知名称
const NoticeName = '《关于防止未成年人沉迷网络游戏的通知》';

class tips {
  constructor() {
  }
}

// 未成年人在禁止充值的时间段内
tips[tipType.nonageForbidCharge] = new tipEntity({
  className: tipType.nonageForbidCharge,
  content: '根据相关部门对于未成年用户的监管要求，该时段暂停相关游戏和充值服务。'
});

// 年龄小于8周岁的提示
tips[tipType.ageLessThanEight] = new tipEntity({
  className: tipType.ageLessThanEight,
  title: '根据相关部门对于未成年用户监管要求',
  subTitle: '该帐号不能充值游戏',
  content: `根据${NoticeName}，网络游戏企业不得为未满8周岁以下用户提供游戏付费服务。`
});

// 8-16周岁充值金额达到上限的提示
tips[tipType.ageLessThanSixteen] = new tipEntity({
  className: tipType.ageLessThanSixteen,
  title: '该游戏本月累计充值金额已达到上限',
  subTitle: '每个游戏每月累计充值不能超过200元',
  content: `根据${NoticeName}，8~16周岁用户单次充值金额不得超过50元人民币，每款游戏每月累计充值金额不得超过200元人民币。`
}); 

// 8-16周岁可充值，但充值金额达到上限的提示
tips[tipType.ageLessThanSixteenCharge] = new tipEntity({
  className: tipType.ageLessThanSixteenCharge,
  title: '本次充值金额超过单笔上限',
  subTitle: '请重新选择充值金额',
  content: `根据${NoticeName}，8~16周岁用户单次充值金额不得超过50元人民币，每款游戏每月累计充值金额不得超过200元人民币。`
});

// 16-18周岁充值金额达到上限的提示
tips[tipType.ageLessThanEighteen] = new tipEntity({
  className: tipType.ageLessThanEighteen,
  title: '该游戏本月累计充值金额已达到上限',
  subTitle: '每个游戏每月累计充值不能超过400元',
  content: `根据${NoticeName}，16~18周岁用户单次充值金额不得超过100元人民币，每款游戏每月累计充值金额不得超过400元人民币。`
});

// 16-18周岁可充值，但充值金额达到上限的提示
tips[tipType.ageLessThanEighteenCharge] = new tipEntity({
  className: tipType.ageLessThanEighteenCharge,
  title: '本次充值金额超过单笔上限',
  subTitle: '请重新选择充值金额',
  content: `根据${NoticeName}，16~18周岁用户单次充值金额不得超过100元人民币，每款游戏每月累计充值金额不得超过400元人民币。`
});

// 登录后时长已达到上限的提示
tips[tipType.gameTimeLimitWhenLogin] = new tipEntity({
  className: tipType.gameTimeLimitWhenLogin,
  title: '您今日在该游戏时长已经达到上限',
  content: `根据${NoticeName}，未成年用户法定节假日每日累计不得超过3小时，其它时间每日不得超过1.5小时。` 
});

// 游戏中时长已达到上限的提示
tips[tipType.gameTimeLimitWhenPlaying] = new tipEntity({
  className: tipType.gameTimeLimitWhenPlaying,
  title: '您今日在该游戏时长已达到上限',
  subTitle: '30秒后将返回登录页',
  content: `根据${NoticeName}，未成年用户法定节假日每日累计不得超过3小时，其它时间每日不得超过1.5小时。`
});

export default tips;