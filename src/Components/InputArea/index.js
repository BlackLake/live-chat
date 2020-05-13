import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'antd';
import './style.css';

class InputArea extends Component {
  render() {
    return (
      <Row align={'middle'}>
        <Col span={22}>
          <Row justify={'end'}>
            <Input className={'message-input'} />
          </Row>
        </Col>
        <Col span={2}>
          <Row justify={'center'}>
            <Button type={'primary'} size={'medium'}>
              Send
            </Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default InputArea;
