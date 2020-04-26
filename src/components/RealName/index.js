import React from 'react';
import classnames from 'classnames';
import './index.less';

const RealName = ({ className }) => {
  const componentClassName = classnames('real-name', className);

  return (
    <div className={componentClassName}>
      <h4>为保护您的合法权益，请完善帐号信息<i className="real-name__close" /></h4>
      <ul className="real-name__title">
        <li>
          身份证绑定
        </li>
      </ul>

      <div className="real-name__main">
        <div className="real-name__item">
          <span className="real-name__item-label">真实姓名</span>
          <input className='real-name__item-input' type="text" id="real-name" />
          <span className="icon" />
          <p className="hint realname_error"></p>
        </div>

        <div className="real-name__item">
          <span className="real-name__item-label">身份证</span>
          <input className='real-name__item-input' type="text" id="real-card" />
          <span className="icon" />
          <p className="hint realcard_error"></p>
        </div>

        <a className="real-name__submit" id="bind-approve">立即绑定</a>
        
      </div>

      <div className="real-name__bottom">
        按照政府部门关于实名注册的要求，在您
        <span>未绑定有效身份信息之前</span>
        ，帐号无法游戏和充值，敬请谅解。
      </div>
    </div>
  )
}

export default RealName;