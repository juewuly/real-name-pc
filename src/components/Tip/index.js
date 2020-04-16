import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.less';

const Tip = ({ className, title, subTitle, subTitle2, content, canClose, onClose }) => {
  const componentClassName = classnames('tip', className);

  return (
    <div className={componentClassName}>
      <div>
        <h3 className='tip__title'>{title}</h3>
        {subTitle && <h3 className='tip__title'>{subTitle}</h3>}
        {subTitle2 && <h3 className='tip__title'>{subTitle2}</h3>}

        <main className='tip__content'>
          <p>{content}</p>
        </main>
      </div>
      {canClose && <i onClick={onClose} className='tip__close' />}
    </div>
  );
}

Tip.propTypes = {

}

Tip.defaultProps = {
  canClose: true
}

export default Tip;