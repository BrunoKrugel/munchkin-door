import {
  WebSocketServer
} from 'ws';

import {
  parseMessage
} from './input/parser.js';

const wss = new WebSocketServer({
  port: 4554
});

wss.on('connection', function connection(ws) {
  function message(value) {
    ws.send(value);
  }

  ws.on('message', function incoming(payload) {
    parseMessage(payload).then((value) => {
      message(value);
    });
  });
});