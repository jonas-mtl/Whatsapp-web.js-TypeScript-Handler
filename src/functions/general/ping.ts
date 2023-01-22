import BaseClient from '../../index';

const event: any = {
  name: 'message',
  execute: (message: any, client: BaseClient) => {
    if (message.body === '!ping') {
      message.reply('pong');
    }
  },
};

export default event;
