let socket = null;

const NORMAL_CLOSURE = 1000;

const webSocket = {
  isSocketInitialized: () => {
    return !!socket;
  },
  open: (url, onOpen, onMessage, onClose, onError) => {
    socket = new WebSocket(url);

    socket.onopen = () => {
      onOpen();
      console.log('WebSocket connection established');
    };
    socket.onmessage = (message) => {
      onMessage(JSON.parse(message.data));
    };
    socket.onclose = (closeEvent) => {
      onClose(closeEvent.reason);
    };
    socket.onError = (error) => {
      onError(error);
      console.log(`Socket encountered error: ${error.message} Closing socket`);
      socket.close();
    };
  },

  sendMessage: (massage) => {
    socket.send(JSON.stringify(massage));
  },

  close: () => {
    socket && socket.close(NORMAL_CLOSURE);
  }
};

export default webSocket;
