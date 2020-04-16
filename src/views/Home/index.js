import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Tip } from 'components';

import { updatePopupData } from 'src/redux/actions';

import './index.less';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  handleClose = () => {
    const { actions } = this.props;
    actions.updatePopupData({
      show: false
    });
  }

  render() {
    const { show, title, subTitle, subTitle2, content, canClose, noMask } = this.props;

    if (!show) {
      return null;
    }

    return (
      <Modal noMask={noMask}>
        <Tip
          title={title}
          subTitle={subTitle}
          subTitle2={subTitle2}
          content={content}
          canClose={canClose}
          onClose={this.handleClose} />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  show: state.getIn(['data', 'popup', 'show']),
  title: state.getIn(['data', 'popup', 'title']),
  subTitle: state.getIn(['data', 'popup', 'subTitle']),
  subTitle2: state.getIn(['data', 'popup', 'subTitle2']),
  content: state.getIn(['data', 'popup', 'content']),
  canClose: state.getIn(['data', 'popup', 'canClose']),
  noMask: state.getIn(['data', 'popup', 'noMask'])
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