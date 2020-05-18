import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tip } from 'components';

import './index.less';


const LobbyMiniContainer = ({ className, show, title, subTitle, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='lobby-mini-container'>
      <Tip
      className={className}
      title={title}
      subTitle={subTitle}
      content={content} />
    </div>
  );
}

const mapStateToProps = state => ({
  className: state.getIn(['data', 'lobbyMini', 'className']),
  show: state.getIn(['data', 'lobbyMini', 'show']),
  title: state.getIn(['data', 'lobbyMini', 'title']),
  subTitle: state.getIn(['data', 'lobbyMini', 'subTitle']),
  content: state.getIn(['data', 'lobbyMini', 'content']),
});

export default connect(mapStateToProps, null)(LobbyMiniContainer);