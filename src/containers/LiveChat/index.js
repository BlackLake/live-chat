import React, { Component, Fragment } from 'react';
import MessageListArea from '../MessageListArea';
import InputArea from '../../components/InputArea';
import webSocket from '../../services/websocket-service';

class LiveChat extends Component {
  state = {
    messages: []
  };

  onConnectionOpened = () => {
    const connectionOpenedMessage = {
      sender: 'System',
      message: 'Connected To WebSocket'
    };

    this.setState({
      messages: [...this.state.messages, connectionOpenedMessage]
    });
  };

  onMessageReceived = (message) => {
    console.log('message received', message);
    this.setState({ messages: [...this.state.messages, message] });
  };

  onConnectionClosed = () => {
    const connectionClosedMessage = {
      sender: 'System',
      message: 'Connection Closed'
    };

    this.setState({
      messages: [...this.state.messages, connectionClosedMessage]
    });
  };
  onConnectionError = (error) => {
    const errorMessage = {
      sender: 'System',
      message: error
    };
    this.setState({ messages: [...this.state.messages, errorMessage] });
  };

  componentDidMount() {
    webSocket.open(
      'ws://localhost:8080/ws',
      this.onConnectionOpened,
      this.onMessageReceived,
      this.onConnectionClosed,
      this.onConnectionError
    );
  }

  render() {
    return (
      <Fragment>
        <MessageListArea messages={this.state.messages} />
        <InputArea />
      </Fragment>
    );
  }
}

export default LiveChat;
