import React from 'react';
import { connect } from 'react-redux';
import { Tip } from 'components';
import { features, statePath } from 'sdk/config';

import './index.less';

const featurePath = statePath.getPathByFeature(features.lobbyMini);

const LobbyMiniContainer = ({ className, show, title, subTitle, content, onClickOk }) => {
  if (!show) {
    return null;
  }

  return (
    <div className='lobby-mini-container'>
      <Tip
        className={className}
        title={title}
        subTitle={subTitle}
        content={content}
        showButton={true}
        onClickOk= {onClickOk} />
    </div>
  );
}

const mapStateToProps = state => ({
  className: state.getIn([...featurePath, 'className']),
  show: state.getIn([...featurePath, 'show']),
  title: state.getIn([...featurePath, 'title']),
  subTitle: state.getIn([...featurePath, 'subTitle']),
  content: state.getIn([...featurePath, 'content']),
  onClickOk: state.getIn([...featurePath, 'onClickOk'])
});

export default connect(mapStateToProps, null)(LobbyMiniContainer);