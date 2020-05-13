import React, { Component, Fragment } from 'react';
import MessageListArea from '../MessageListArea';
import InputArea from '../../Components/InputArea';

class LiveChat extends Component {
  state = {
    messages: [
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' },
      { sender: 'BlackLake', message: 'Lorem ipsum dolor sit amet' }
    ]
  };

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
