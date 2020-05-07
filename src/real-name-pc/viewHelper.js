import renderApp from './renderApp';
import App from './app';
import Config from 'src/real-name-pc/config';
import { 
  storeHelper, 
} from 'utils';

const storeHelperInstance = storeHelper.Instance;

const setPopupData = data => storeHelperInstance.setPopupData(data);
const updateRealNameData = data => storeHelperInstance.updateRealNameData(data);

class viewHelper {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new viewHelper();
    }

    return this._instance;
  }

  // 渲染App
  renderApp() {
    renderApp(App);
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage() {
    setPopupData({
      show: true,
      content: '根据相关部门对于未成年用户的监管要求，该时段暂停相关游戏和充值服务。'
    });
  }

  // 年龄小于8周岁的提示
  showEight() {
    const { title, subTitle, content } = Config.pay.ageLessThanEight;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen() {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteen;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge() {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteenCharge;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });    
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen() {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteen;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge() {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteenCharge;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  // 登录后游戏时长已达到上限时的提示
  showTimeLimitAfterLogin() {
    const { title, content } = Config.login.gameTimeLimit;
    setPopupData({
      show: true,
      title,
      content,
      canClose: false,
      noMask: true
    });
  }

  // 游戏中时长已达到上限时的提示
  showTimeLimitWhenPlaying() {
    const { title, subTitle, content } = Config.playing.gameTimeLimit;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose: false,
      noMask: true
    })
  }

  // 关闭弹窗
  closePopup() {
    setPopupData({ show: false });
  }


}

export default viewHelper;

