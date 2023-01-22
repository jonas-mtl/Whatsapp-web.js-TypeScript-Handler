import BaseClient from '../../index';
import chalk from 'chalk';

const event: any = {
  name: 'ready',
  execute: (client: BaseClient) => {
    console.log(chalk.hex('#8A89C0')('Client online!'));
  },
};

export default event;
