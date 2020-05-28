/**
 * @author: liuyang9
 * @description: sdk的入口页
 */


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { updatePopupData } from 'src/redux/actions';
import { features, statePath } from 'sdk/config';

import {
  PopupContainer,
  RealNameContainer,
  LobbyContainer,
  LobbyMiniContainer
} from 'src/containers';

const rootPath = statePath.getRootPath;
const featurePath = statePath.getPathByFeature(features.h5Platform);

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
  feature: state.getIn([...rootPath, 'global', 'feature']),
  showRealName: state.getIn([...featurePath, 'realName', 'show']),
  showPopup: state.getIn([...featurePath, 'popup', 'show'])
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