const path = require('path');
const env = require('getenv');
const dotenv = require('dotenv');

const baseDir = path.join(__dirname, '..');
dotenv.config({ path: path.join(__dirname, '.env') });

const conf = {
  env: 'dev',
  port: 3000,
  home: baseDir,

  logLevel: 'auto',
  logPath: path.join(baseDir, 'logs'),

  dbName: 'peacock_dev',
  dbUser: 'peacock',
  dbPass: 'ZhQPz5h9uVT2vHgS',
  dbProtocol: 'mongodb', //tingodb
  dbParams: 'ssl=true&replicaSet=peacock-shard-0&authSource=admin',
  dbHosts: 'peacock-shard-00-00-cfrmo.mongodb.net,peacock-shard-00-01-cfrmo.mongodb.net,peacock-shard-00-02-cfrmo.mongodb.net'  
};

module.exports = {
  port: env.int('PORT', conf.port),
  env: env.string('NODE_ENV', conf.env),
  home: env.string('HOME_DIR', conf.home),

  logPath: env.string('LOG_PATH', conf.logPath),
  logLevel: env.string('LOG_LEVEL', conf.logLevel),

  dbUser: env.string('DB_USER', conf.dbUser),
  dbName: env.string('DB_NAME', conf.dbName),
  dbPass: env.string('DB_PASS', conf.dbPass),
  dbHosts: env.string('DB_HOSTS', conf.dbHosts),
  dbParams: env.string('DB_PARAMS', conf.dbParams),
  dbProtocol: env.string('DB_PROTOCOL', conf.dbProtocol),
};
