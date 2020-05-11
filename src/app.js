const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRouter');
const lessonRouter = require('./routes/lessonRouter');
const errorController = require('./controllers/errorController');
const AppError = require('./utils/AppError');
const catchError = require('./utils/catchError');

const app = express();

app.use(express.json({
    limit: '10kb'
}));

if (isDev) {
    app.use(morgan('dev'))
}

app.use((req, res, next) => {
    const date = new Date();
    req.requestAt = date.getTime() - (date.getTimezoneOffset() * -60 * 1000);
    next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/lessons', lessonRouter);

app.all('*', catchError((req, res) => {
    throw new AppError(
        `Can\'t find ${req.originalUrl} on this server.`,
        404
    );
}));

app.use(errorController);

module.exports = app;