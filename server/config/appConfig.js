// write your application configration here
const serverConfig = {
  port: 3000,
  hostname: '127.0.0.1'
}
const dbConfig = {
  mongoUrl: 'mongodb://localhost:27017/testDB'
  //mongoUrl : 'mongodb://localhost/keep'
}

const authConfig = {
  jwtSecret: 'jwttokenbasedauth'
}

module.exports = {
  serverConfig,
  dbConfig,
  authConfig
}