import React from 'react';
import { connect } from 'react-redux';
import { Tip } from 'components';
import { features, statePath } from 'sdk/config';

import './index.less';

const featurePath = statePath.getPathByFeature(features.lobby);

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
  className: state.getIn([...featurePath, 'className']),
  show: state.getIn([...featurePath, 'show']),
  title: state.getIn([...featurePath, 'title']),
  subTitle: state.getIn([...featurePath, 'subTitle']),
  content: state.getIn([...featurePath, 'content']),
});

export default connect(mapStateToProps, null)(LobbyContainer);