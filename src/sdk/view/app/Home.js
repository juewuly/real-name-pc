/**
 * @author: liuyang9
 * @description: sdk的入口页
 */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import { updatePopupData } from 'src/redux/actions';

import {
  PopupContainer,
  RealNameContainer,
  LobbyContainer,
  LobbyMiniContainer
} from 'src/containers';

import { features } from 'sdk/config';

const Home = ({ feature, showRealName, showPopup }) => {
  const FeatureComponent = getFeatureComponent(feature);
  if (FeatureComponent) {
    return FeatureComponent;
  }

  if (showRealName) {
    return <RealNameContainer />
  }

  return (
    <>
      { showPopup && <PopupContainer />}
    </>
  );
}

// 获取feature对应的组件
const getFeatureComponent = feature => {
  const featureMap = {
    [features.lobby]: <LobbyContainer />,
    [features.lobbyMini]: <LobbyMiniContainer />
  };

  return featureMap[feature] ? featureMap[feature] : null;
}

const mapStateToProps = state => ({
  feature: state.getIn(['data', 'global', 'feature']),
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

export default hot(connect(mapStateToProps, mapDispatchToProps)(Home));