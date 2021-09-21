import {
  pick
} from '../cards/open.js';

export async function parseMessage(payload) {
  const json = JSON.parse(String(payload));
  switch (json.event) {
    case 'RESET':
      return 'RESET';
    case 'OPEN':
      pick().then((value) => {
        console.log('value: ' + value);
        return value;
      });
      break;
    case 'OPEN_SECOND':
      return 'OPEN_SECOND';
    default:
      return 'No matching statements.';
  }
}