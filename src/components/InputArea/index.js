import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'antd';
import './style.css';
import webSocket from '../../services/websocket-service';

class InputArea extends Component {
  state = {
    input: null
  };

  onInputChanged = (input) => {
    this.setState({ input });
  };

  clearInput = () => {
    this.setState({ input: null });
  };

  sendMessage = () => {
    if (webSocket.isSocketInitialized()) {
      const message = {
        sender: 'BlackLake',
        message: this.state.input
      };
      webSocket.sendMessage(message);
      this.clearInput();
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
