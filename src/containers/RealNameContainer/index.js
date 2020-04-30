import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, RealName } from 'components';

import { 
  updateRealNameData,
  addRealName
} from 'src/redux/actions';

const Home = ({ show, canClose, options, actions }) => {
  const handleClose = () => {
    actions.updateRealNameData({
      show: false
    });
  }

  const handleSubmit = (name, card) => {
    const { addRealName } = actions;
    addRealName({
      appkey: options.get('appkey'),
      qid: options.get('qid'),
      platform: options.get('platform'),
      idcard_check_type: options.get('idcard_check_type'),
      name: name,
      id: card,
    })
  }

  if (!show) {
    return null;
  }

  return (
    <Modal>
      <RealName 
        canClose={canClose} 
        onClose={handleClose}
        onSubmit={handleSubmit} />
    </Modal>
  );
}

const mapStateToProps = state => ({
  show: state.getIn(['data', 'realName', 'show']),
  canClose: state.getIn(['data', 'realName', 'canClose']),
  // 提交实名认证时需要传递的一些参数
  options: state.getIn(['data', 'realName', 'options'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateRealNameData,
    addRealName
  }, dispatch)
});

Home.defaultProps = {
  noMask: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);