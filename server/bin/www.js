// write your server code here
const app = require('../app');
const { serverConfig } = require('../config').appConfig;

app.listen(serverConfig.port, () => {
  //console.log(`Server running on PORT - ${serverConfig.port}`);
});