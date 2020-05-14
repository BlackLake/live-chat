import React, {Component} from 'react';
import {List} from 'antd';
import Message from '../../components/Message';
import './style.css';

class MessageListArea extends Component {
  renderMessage = (message) => {
    return <Message message={message} />;
  };

  render() {
    return (
      <div className={'message-list-container'}>
        <List
          size="small"
          dataSource={this.props.messages}
          renderItem={this.renderMessage}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default MessageListArea;
