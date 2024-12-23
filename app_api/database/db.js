const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = `mongodb://${host}/travlr`;
// const dbURI = `mongodb://localhost:27017`;
const readline = require('readline');

// avoid 'current Server Discovery and Monitoring engine is deprecated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        // useUnifiedTopology: true
    }), 1000);
}

mongoose.connection.on('connected', () => {

});

mongoose.connection.on('error', err => {

});

mongoose.connection.on('disconnected', () => {

});

if (process.platform === 'win32') {
};

const gracefulShutdown = (msg, callback) => {

};

// For nodemon restart
process.once('SIGUR2', () => {

});

// For app termination
process.once('SIGINT', () => {

});

// For Heroku app terdmination
process.once('SIGTERM', () => {

});

connect();

// Bring the Mongoose schema
require("./models/travlr");

require("./models/users");