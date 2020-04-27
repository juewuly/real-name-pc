import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, RealName } from 'components';

import { updateRealNameData } from 'src/redux/actions';

const Home = ({ show, canClose, actions }) => {
  const handleClose = () => {
    actions.updateRealNameData({
      show: false
    });
  }

  if (!show) {
    return null;
  }

  return (
    <Modal>
      <RealName canClose={canClose} onClose={handleClose}>
        
      </RealName>
    </Modal>
  );
}

const mapStateToProps = state => ({
  show: state.getIn(['data', 'realName', 'show']),
  canClose: state.getIn(['data', 'realName', 'canClose']),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateRealNameData
  }, dispatch)
});

Home.defaultProps = {
  noMask: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);