const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({path: path.join(__dirname, 'config.env')});

const app = require('./app');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('Connected to DB successfully.');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});