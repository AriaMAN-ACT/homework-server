const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRouter');
const lessonRouter = require('./routes/lessonRouter');
const classRouter = require('./routes/classRouter');
const gradeRouter = require('./routes/gradeRouter');
const schoolRouter = require('./routes/schoolRouter');
const homeworkRouter = require('./routes/homeworkRouter');
const homeworkAnswerRouter = require('./routes/homeworkAnswerRouter');
const errorController = require('./controllers/errorController');
const AppError = require('./utils/AppError');
const catchError = require('./utils/catchError');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
app.use('/api/v1/classes', classRouter);
app.use('/api/v1/grades', gradeRouter);
app.use('/api/v1/schools', schoolRouter);
app.use('/api/v1/homework', homeworkRouter);
app.use('/api/v1/homeworkAnswers', homeworkAnswerRouter);

app.all('*', catchError((req) => {
    throw new AppError(
        `Can\'t find ${req.originalUrl} on this server.`,
        404
    );
}));

app.use(errorController);

module.exports = app;