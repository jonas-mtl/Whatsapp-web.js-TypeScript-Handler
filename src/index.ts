import { ClientEventInterface } from './typings/index';
import { Client as WWebClient } from 'whatsapp-web.js';
import { fileURLToPath, pathToFileURL } from 'url';
import { clientConfig } from './config.js';
import path, { dirname } from 'path';
import { readdirSync } from 'fs';
import chalk from 'chalk';

export default class BaseClient extends WWebClient {
  public config: any;

  constructor() {
    super({});
    this.config = clientConfig;
  }

  /**
   * initClient
   */
  public async initClient() {
    const loaded: number = await this.loadFunctions();

    this.loadCli(loaded);
    this.initialize();
  }

  /**
   * load functions
   */
  private async loadFunctions(): Promise<number> {
    let funcCount: number = 0;

    await Promise.all(
      readdirSync(`${dirname(fileURLToPath(import.meta.url))}/functions`).map(async (folder) => {
        await Promise.all(
          readdirSync(`${dirname(fileURLToPath(import.meta.url))}/functions/${folder}`)
            .filter((file) => file.endsWith('.js' || '.ts'))
            .map(async (file) => {
              const event: ClientEventInterface = (
                await import(`${pathToFileURL(path.resolve(`${dirname(fileURLToPath(import.meta.url))}/functions/${folder}/${file}`))}`)
              ).default;

              this.on(event.name, (...args) => event.execute(...args, this));
              funcCount++;
            })
        );
      })
    );

    return funcCount;
  }

  private async loadCli(loaded: number) {
    const addLine = (content: string, extra?: number) => {
      return `\n│ ${content}${' '.repeat(Math.round((extra ? extra : 0) + 2 + interfaceLength - content.length))}│`;
    };

    const interfaceLength = 35;
    let interfaceString: string = '';
    interfaceString = `┌${'─'.repeat(interfaceLength + 3)}┐${addLine(' ')}`;
    interfaceString +=
      addLine(`${chalk.bold('◊ Node.js version:')} ${process.version}`, 9) +
      addLine(` `) +
      addLine(`${chalk.hex('#8A89C0')('-- File Handler --')}`, 24) +
      addLine(` ${chalk.hex('#8A89C0')('⤷')} Functions loaded: ${loaded}`, 24) +
      addLine(` `);
    interfaceString += `\n└${'─'.repeat(interfaceLength + 3)}┘`;
    console.clear();
    console.log(interfaceString);
  }
}

const wWebClient = new BaseClient();
wWebClient.initClient();
