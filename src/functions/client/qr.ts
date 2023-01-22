import BaseClient from '../../index';
import qrcode from 'qrcode-terminal';

const event: any = {
  name: 'qr',
  execute: (qr: any, client: BaseClient) => {
    qrcode.generate(qr, { small: true });
  },
};

export default event;
