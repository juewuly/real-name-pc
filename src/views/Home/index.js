import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updatePopupData } from 'src/redux/actions';

import {
  PopupContainer,
  RealNameContainer,
  LobbyContainer,
  LobbyMiniContainer
} from 'src/containers';

import './index.less';

const Home = ({ type, showRealName, showPopup }) => {
  if (type === 'lobby') {
    return <LobbyContainer />
  }

  if (type === 'lobbyMini') {
    return <LobbyMiniContainer />
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

const mapStateToProps = state => ({
  type: state.getIn(['data', 'global', 'type']),
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