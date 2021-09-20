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
  function message(event, data) {
    ws.send(JSON.stringify({
      event,
      data
    }));
  }

  ws.on('message', function incoming(payload) {
    parseMessage(payload).then((value) => {
      const json = JSON.parse(String(payload));
      message(json.event, value);
    });
  });
  ws.send('something');
});