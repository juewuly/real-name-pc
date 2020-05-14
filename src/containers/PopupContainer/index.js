import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Tip } from 'components';

import { updatePopupData } from 'src/redux/actions';

const PopupContainer = ({ className, show, title, subTitle, subTitle2, content, canClose, noMask, actions }) => {
  const handleClose = () => {
    actions.updatePopupData({
      show: false
    });
  }

  if (!show) {
    return null;
  }

  return (
    <Modal noMask={noMask}>
      <Tip
        className={className}
        title={title}
        subTitle={subTitle}
        subTitle2={subTitle2}
        content={content}
        canClose={canClose}
        onClose={handleClose} />
    </Modal>
  );
}

const mapStateToProps = state => ({
  className: state.getIn(['data', 'popup', 'className']),
  show: state.getIn(['data', 'popup', 'show']),
  title: state.getIn(['data', 'popup', 'title']),
  subTitle: state.getIn(['data', 'popup', 'subTitle']),
  subTitle2: state.getIn(['data', 'popup', 'subTitle2']),
  content: state.getIn(['data', 'popup', 'content']),
  canClose: state.getIn(['data', 'popup', 'canClose']),
  noMask: state.getIn(['data', 'popup', 'noMask'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updatePopupData
  }, dispatch)
});

PopupContainer.defaultProps = {
  noMask: false
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);