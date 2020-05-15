import React, {Component, Fragment} from 'react';
import MessageListArea from '../MessageListArea';
import InputArea from '../../components/InputArea';
import webSocket from '../../services/websocket-service';
import {Button, Modal, Row, Space} from 'antd';
import './style.css';

class LiveChat extends Component {
  state = {
    messages: [],
    userName: '',
    isModalVisible: true,
    connectionCloseReason: ''
  };

  onConnectionOpened = () => {
    const connectionOpenedMessage = {
      sender: 'System',
      message: 'Connected To WebSocket'
    };

    this.setState({
      messages: [...this.state.messages, connectionOpenedMessage],
      isModalVisible: false
    });
  };

  onMessageReceived = (message) => {
    console.log('message received', message);
    this.setState({ messages: [...this.state.messages, message] });
  };

  onConnectionClosed = (reason) => {
    const connectionClosedMessage = {
      sender: 'System',
      message: `Connection Closed`
    };

    this.setState({
      messages: [...this.state.messages, connectionClosedMessage],
      isModalVisible: true,
      connectionCloseReason: reason
    });
  };

  onConnectionError = (error) => {
    const errorMessage = {
      sender: 'System',
      message: error
    };
    this.setState({ messages: [...this.state.messages, errorMessage] });
  };

  onUserNameInputChange = (userNameInput) => {
    this.setState({ userName: userNameInput });
  };

  onModalConfirm = () => {
    webSocket.open(
      `ws://localhost:8080/ws?userName=${this.state.userName}`,
      this.onConnectionOpened,
      this.onMessageReceived,
      this.onConnectionClosed,
      this.onConnectionError
    );
  };

  render() {
    return (
      <Fragment>
        <Modal
          title={'Enter username'}
          visible={this.state.isModalVisible}
          closable={false}
          footer={null}
        >
          <Row justify={'center'} className={'modal-row'}>
            <Space>
              <span>Username :</span>
              <input
                value={this.state.userName}
                onChange={(e) => this.onUserNameInputChange(e.target.value)}
                autoFocus
              />
              <span>{this.state.connectionCloseReason}</span>
            </Space>
          </Row>
          <Row justify={'center'} className={'modal-row'}>
            <Button
              type={'primary'}
              onClick={this.onModalConfirm}
              disabled={!this.state.userName}
            >
              Connect
            </Button>
          </Row>
        </Modal>
        <MessageListArea messages={this.state.messages} />
        <InputArea userName={this.state.userName} />
      </Fragment>
    );
  }
}

export default LiveChat;
