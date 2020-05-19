import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.less';

const Tip = ({ className, title, subTitle, subTitle2, content, canClose, onClose, showButton, onClickOk }) => {
  const componentClassName = classnames('tip', className);

  return (
    <div className={componentClassName}>
      <div className='tip__table'>
        <div className='tip__cell'>
          <h3 className='tip__title'>{title}</h3>
          {subTitle && <h3 className='tip__title'>{subTitle}</h3>}
          {subTitle2 && <h3 className='tip__title'>{subTitle2}</h3>}

          <main className='tip__content'>
            <p>{content}</p>
          </main>

          {showButton && <div className='tip__button' onClick={onClickOk}>确定</div>}
        </div>
      </div>
      {canClose && <i onClick={onClose} className='tip__close' />}
    </div>
  );
}

Tip.propTypes = {

}

Tip.defaultProps = {
  canClose: true,
  showButton: false,
  onClickOk: () => {}
}

export default Tip;