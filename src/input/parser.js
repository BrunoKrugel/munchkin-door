import {
  pick, reset
} from '../cards/open.js';

export async function parseMessage(payload) {
  const json = JSON.parse(String(payload));
  switch (json.event) {
    case 'RESET':
      await reset();
      return 'doorCard_reset_ok';
    case 'OPEN':
      return await pick().then((value) => {
        return value;
      });
    case 'OPEN_SECOND':
      return 'OPEN_SECOND';
    default:
      return 'No matching statements.';
  }
}