import WebSocket from 'ws';

import {
  parseMessage
} from './input/parser';

const wss = new WebSocket.Server({
  port: 8080
});

wss.on('connection', (ws) => {
  function message(event, data) {
    ws.send(JSON.stringify({
      event,
      data
    }));
  }

  ws.on('message', (payload) => {
    parseMessage(payload).then((value) => {
      const json = JSON.parse(String(payload));
      message(json.event, value);
    });
  });
});