import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ids } from 'sdk/config';

import './index.less';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById(ids.sdkModalId);

    const maskClassName = props.noMask ? 'modal-mask no-mask' : 'modal-mask';
    this.mask = document.createElement('div');
    this.mask.setAttribute('class', maskClassName);

    this.wrap = document.createElement('div');
    this.wrap.setAttribute('class', 'modal-wrap');
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.mask);
    this.modalRoot.appendChild(this.wrap);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.mask);
    this.modalRoot.removeChild(this.wrap);
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.wrap);
  }
}

Modal.propTypes = {
  noMask: PropTypes.bool,
  children: PropTypes.any.isRequired
}

Modal.defaultProps = {
  noMask: false
}

export default Modal;

