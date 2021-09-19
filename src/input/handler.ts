/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { getId, getScheduler } from '../database/firebase';

export function messageParser(payload: string): void {
  const json = JSON.parse(payload);
  console.log(json.data.method);
}

export async function getUser(user: string): Promise<String> {
  return getId(user);
}

export async function getSchedulerContent(user: String): Promise<any> {
  return getId(user).then((id) => getScheduler(id));
}
