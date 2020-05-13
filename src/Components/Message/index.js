import React, { Component } from 'react';
import { List } from 'antd';

class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <List.Item key={message.id}>
        <List.Item.Meta title={message.sender} description={message.message} />
      </List.Item>
    );
  }
}

export default Message;
