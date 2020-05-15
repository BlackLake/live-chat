import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'antd';
import './style.css';
import webSocket from '../../services/websocket-service';

class InputArea extends Component {
  state = {
    input: ''
  };

  onInputChanged = (input) => {
    this.setState({ input });
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  sendMessage = () => {
    if (webSocket.isSocketInitialized() && this.state.input !== '') {
      const message = {
        sender: this.props.userName,
        message: this.state.input
      };
      webSocket.sendMessage(message);
      this.clearInput();
      this.messageInput.focus();
    }
  };

  render() {
    return (
      <Row align={'middle'}>
        <Col span={22}>
          <Row justify={'end'}>
            <Input
              className={'message-input'}
              onChange={(e) => this.onInputChanged(e.target.value)}
              value={this.state.input}
              ref={(input) => {
                this.messageInput = input;
              }}
              autoFocus
            />
          </Row>
        </Col>
        <Col span={2}>
          <Row justify={'center'}>
            <Button type={'primary'} size={'medium'} onClick={this.sendMessage}>
              Send
            </Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default InputArea;
