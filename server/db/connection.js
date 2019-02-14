// write your db connection code here
const mongoose = require('mongoose');
const { dbConfig } = require('../config/index').appConfig;

const connectToMongo = () => {
  mongoose.connect(dbConfig.mongoUrl, { useNewUrlParser: true });
  //console.log("Connected to MONGO");
};

const getMongoConnection = () => mongoose.connection;

module.exports = {
  connectToMongo,
  getMongoConnection
}