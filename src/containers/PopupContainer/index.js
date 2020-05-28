import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Tip } from 'components';
import { features, statePath } from 'sdk/config';
import { updatePopupData } from 'src/redux/actions';

const featurePath = statePath.getPathByFeature(features.h5Platform);
featurePath.push('popup');

const PopupContainer = ({ className, show, title, subTitle, subTitle2, content, canClose, noMask, actions }) => {
  const handleClose = () => {
    actions.updatePopupData({
      show: false
    });
  }

  if (!show) {
    return null;
  }

  return (
    <Modal noMask={noMask}>
      <Tip
        className={className}
        title={title}
        subTitle={subTitle}
        subTitle2={subTitle2}
        content={content}
        canClose={canClose}
        onClose={handleClose} />
    </Modal>
  );
}

const mapStateToProps = state => ({
  className: state.getIn([...featurePath, 'className']),
  show: state.getIn([...featurePath, 'show']),
  title: state.getIn([...featurePath, 'title']),
  subTitle: state.getIn([...featurePath, 'subTitle']),
  subTitle2: state.getIn([...featurePath, 'subTitle2']),
  content: state.getIn([...featurePath, 'content']),
  canClose: state.getIn([...featurePath, 'canClose']),
  noMask: state.getIn([...featurePath, 'noMask'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updatePopupData
  }, dispatch)
});

PopupContainer.defaultProps = {
  noMask: false
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);