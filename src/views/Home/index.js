import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Tip, RealName } from 'components';

import { updatePopupData } from 'src/redux/actions';

import './index.less';

const Home = ({ show, title, subTitle, subTitle2, content, canClose, noMask, actions }) => {
  const handleClose = () => {
    actions.updatePopupData({
      show: false
    });
  }

  const handleCloseRealName = () => {
    console.log('关闭实名。。。。');
  }

  return (
    <Modal>
      <RealName canClose={true} onClose={handleCloseRealName}>
        
      </RealName>
    </Modal>
  );

  if (!show) {
    return null;
  }

  return (
    <Modal noMask={noMask}>
      <Tip
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

Home.defaultProps = {
  noMask: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);