import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Tip, RealName } from 'components';

import { updatePopupData } from 'src/redux/actions';

import {
  PopupContainer,
  RealNameContainer
} from 'src/containers';

import './index.less';

const Home = ({ showRealName, showPopup }) => {
  if (showRealName) {
    return <RealNameContainer />
  }

  return (
    <>
      { showPopup && <PopupContainer />}
    </>
  );
}

const mapStateToProps = state => ({
  showRealName: state.getIn(['data', 'realName', 'show']),
  showPopup: state.getIn(['data', 'popup', 'show'])
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