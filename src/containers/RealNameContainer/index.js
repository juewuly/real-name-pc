import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, RealName } from 'components';

import { 
  updateRealNameData,
  addRealName
} from 'src/redux/actions';

const Home = ({ show, canClose, actions }) => {
  const handleClose = () => {
    actions.updateRealNameData({
      show: false
    });
  }

  const handleSubmit = (name, card) => {
    const { addRealName } = actions;
    addRealName({
      appkey: '',
      qid: '3211038786',
      name: name,
      id: card,
      platform: 'h5_game',
      idcard_check_type: 'pay_before',
    })
    console.log('submit...', name, card);
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