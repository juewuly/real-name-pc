import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tip } from 'components';

import './index.less';


const LobbyContainer = ({ className, show, title, subTitle, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='lobby-container'>
      <Tip
      className={className}
      title={title}
      subTitle={subTitle}
      content={content} />
    </div>
  );
}

const mapStateToProps = state => ({
  className: state.getIn(['data', 'lobby', 'className']),
  show: state.getIn(['data', 'lobby', 'show']),
  title: state.getIn(['data', 'lobby', 'title']),
  subTitle: state.getIn(['data', 'lobby', 'subTitle']),
  content: state.getIn(['data', 'lobby', 'content']),
});

export default connect(mapStateToProps, null)(LobbyContainer);