export async function parseMessage(payload) {
  const json = JSON.parse(String(payload));
  switch (json.event) {
    case 'RESET':
      return 'RESET';
    case 'OPEN':
      return 'OPEN_FIRST';
    case 'OPEN_SECOND':
      return 'OPEN_SECOND';
    default:
      return 'No matching statements.';
  }
}