/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { Data } from 'ws';
import { getSchedulerContent, getUser } from './handler';

export async function parseMessage(payload: Data): Promise<any> {
  const json = JSON.parse(String(payload));
  switch (json.event) {
    case 'TW_USER':
      return getUser(json.data).then((user) => user);
    case 'TW_SCHEDULER':
      return getSchedulerContent(json.data).then((value) => value);
    case 'TW_RESULT':
      return 'Result and logs';
    case 'TW_ACTION':
      return 'Action executed';
    case 'TW_QUEUE':
      return 'Queue ordered';
    default:
      return 'No matching statements.';
  }
}
