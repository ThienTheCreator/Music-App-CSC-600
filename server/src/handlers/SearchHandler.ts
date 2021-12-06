import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(): Promise<any> {
  const songs = await DB.runQuery('search', MessageHandler.arguments);

  console.log('searching');

  return { songs };
}

const schema = {};

export const SearchHandler = new MessageHandler(
  'search',
  schema,
  onMessage,
);
