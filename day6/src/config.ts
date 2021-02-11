// https://docs.nestjs.com/techniques/configuration
// 今回は使わないが，dotenv を推奨
// log level の設定

import { LogLevel } from '@nestjs/common';

interface Config {
  logLevel: LogLevel[];
}

const develop: Config = {
  logLevel: ['debug', 'log', 'verbose', 'warn', 'error'],
};
const production: Config = {
  logLevel: ['log', 'verbose', 'warn', 'error'],
};

export const config =
  process.env.NODE_ENV === 'production' ? production : develop;
