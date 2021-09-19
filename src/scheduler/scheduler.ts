/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
// Organize the scheduler order

function parseScheduler(collection: string, active:string, recurrence:string): String {
  return JSON.stringify({ collection, active, recurrence });
}

export function schedulerOrder(scheduler: any): any {
  const aux = new Array();
  scheduler.forEach((doc: { data: () => any; }) => {
    const query = doc.data();
    aux.push(parseScheduler(query.collection, query.active, query.recurrence));
  });
  console.log((aux));
  return (aux);
}
