import React from 'react';
import { Alert } from 'antd';
import { connect } from 'react-redux';
import { removeAlertMessage } from '../../_actions/index';

function AlertMessageComponent(props) {
  const onClose = e => {
    console.log(e, 'I was closed.');
  props.removeAlertMessage();
  };
  return props.error ? (
    <div>
      <Alert
        description={props.error}
        type="error"
        closable
        className="error-message"
        onClose={onClose}
      />
    </div>
  ) : null;
}

function mapStateToProps(state) {
  return {
    error: state.error
  };
}

export default connect(mapStateToProps, { removeAlertMessage })(
  AlertMessageComponent
);
