import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import 'antd/dist/antd.css';
import LiveChat from './Containers/LiveChat';

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={enUS}>
        <LiveChat />
      </ConfigProvider>
    );
  }
}

export default App;
