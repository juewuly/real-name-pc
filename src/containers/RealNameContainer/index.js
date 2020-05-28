import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, RealName } from 'components';
import { features, statePath } from 'sdk/config';

import { 
  updateRealNameData,
  addRealName
} from 'src/redux/actions';

const featurePath = statePath.getPathByFeature(features.h5Platform);
featurePath.push('realName');

const Home = ({ show, canClose, options, actions }) => {
  const handleClose = () => {
    actions.updateRealNameData({
      show: false
    });
  }

  const handleSubmit = (name, card) => {
    const { addRealName } = actions;
    addRealName({
      appkey: options.get('appkey'),
      qid: options.get('qid'),
      platform: options.get('platform'),
      idcard_check_type: options.get('idcard_check_type'),
      name: name,
      id: card,
    })
  }

  if (!show) {
    return null;
  }

  return (
    <Modal>
      <RealName 
        canClose={canClose} 
        onClose={handleClose}
        onSubmit={handleSubmit} />
    </Modal>
  );
}

const mapStateToProps = state => ({
  show: state.getIn([...featurePath, 'show']),
  canClose: state.getIn([...featurePath, 'canClose']),
  // 提交实名认证时需要传递的一些参数
  options: state.getIn([...featurePath, 'options'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateRealNameData,
    addRealName
  }, dispatch)
});

Home.defaultProps = {
  noMask: false
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);