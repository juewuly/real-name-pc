import React, { useState } from 'react';
import classnames from 'classnames';
import { validateMate } from 'utils';
import './index.less';

const RealName = ({ className, canClose, onClose }) => {
  const componentClassName = classnames('real-name', className);
  // 姓名
  const [name, setName] = useState('');
  // 姓名是否有效
  const [isNameValid, setIsNameValid] = useState(null);
  // 姓名无效的错误提示信息
  const [nameErrorInfo, setNameErrorInfo] = useState(null);

  // 身份证号
  const [card, setCard] = useState('');
  // 身份证是否有效
  const [isCardValid, setIsCardValid] = useState(null);
  // 身份证无效时的错误提示信息
  const [cardErrorInfo, setCardErrorInfo] = useState(null);

  /**
   * 处理输入框值的变更
   * @param {*} e 
   */
  const handleInputChane = e => {
    const inputName = e.target.name;
    const value = e.target.value;

    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'card') {
      setCard(value);
    }
  }

  /**
   * 处理姓名输入框失去焦点事件
   * @param {*} e 
   */
  const handleNameBlur = e => {
    const name = e.target.value;

    if (validateMate.checkName(name)) {
      setIsNameValid(true);
      setNameErrorInfo(null);
    } else {
      setIsNameValid(false);
      setNameErrorInfo('请输入真实姓名');
    }
  }

  /**
   * 处理身份证输入框失去焦点事件
   * @param {*} e 
   */
  const handleCardBlur = e => {
    const numOfCard = e.target.value;
    const checkCardResult = validateMate.checkCard(numOfCard);

    if (checkCardResult.isRight) {
      setIsCardValid(true);
      setCardErrorInfo(null);
    } else {
      setIsCardValid(false);
      setCardErrorInfo(checkCardResult.errorInfo);
    }
  }

  /**
   * 处理关闭事件
   */
  const handleClose = () => {
    onClose();
  }

  /**
   * 处理提交实名认证
   */
  const handleSubmit = () => {
    if (!isNameValid) {
      setIsNameValid(false);
      setNameErrorInfo('请输入真实姓名');
      return false;
    }

    if (!isCardValid) {
      const checkCardResult = validateMate.checkCard(card);
      setIsCardValid(false);
      setCardErrorInfo(checkCardResult.errorInfo);
      return false;
    }

    console.log('提交实名认证');
  }

  return (
    <div className={componentClassName}>
      <h4>
        为保护您的合法权益，请完善帐号信息
        {canClose && <i className="real-name__close" onClick={handleClose} />}
      </h4>

      <ul className="real-name__title">
        <li>
          身份证绑定
        </li>
      </ul>

      <div className="real-name__main">
        <div className="real-name__item">
          <span className="real-name__item-label">真实姓名</span>
          <input
            className='real-name__item-input'
            name='name'
            type="text" 
            id="real-name"
            value={name}
            onChange={handleInputChane}
            onBlur={handleNameBlur} />
          <span className={classnames('icon', {'icon-succ': isNameValid, 'icon-error': isNameValid === false })} />
          <p className="hint">{nameErrorInfo}</p>
        </div>

        <div className="real-name__item">
          <span className="real-name__item-label">身份证</span>
          <input 
            className='real-name__item-input'
            name='card'
            type="text" 
            id="real-card"
            value={card}
            onChange={handleInputChane}
            onBlur={handleCardBlur} />
          <span className={classnames('icon', {'icon-succ': isCardValid, 'icon-error': isCardValid === false })} />
          <p className="hint">{cardErrorInfo}</p>
        </div>

        <a className="real-name__submit" id="bind-approve" onClick={handleSubmit}>立即绑定</a>
        
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