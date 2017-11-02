const { MongodHelper } = require('mongodb-prebuilt');

const helper = new MongodHelper(['--port', "27018"]);
helper.run().then((started) => {
  console.log('mongod is running');
}, (e) => {
  console.log('mongod starting error:', e);
});
