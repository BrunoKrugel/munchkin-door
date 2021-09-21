import {
  pick,
  reset
} from '../cards/door.js';

export async function parseMessage(payload) {
  const json = JSON.parse(String(payload));
  switch (json.event) {
    case 'RESET':
      await reset();
      return 'reset_ok';
    case 'OPEN':
      return await pick().then((value) => {
        return value;
      });
    default:
      return 'no_statements.';
  }
}