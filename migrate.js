const _ = require('lodash');
const conf = require('./src/config');

const { dbUser: user, dbPass: pass } = conf;
const { dbProtocol: protocol, dbHosts: hosts, dbName: name, dbParams: params } = conf;
const urlPattern = _.template('${user}:${pass}@${protocol}://${hosts}/${name}?${params}');

console.log(urlPattern({ protocol, hosts, name, params, user, pass }));
module.exports = {
  es6: true,
  //migrationsDir: "./migrations2",
  dbConnectionUri: urlPattern({ protocol, hosts, name, params, user, pass })
}
